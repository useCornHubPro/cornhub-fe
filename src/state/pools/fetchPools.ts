import BigNumber from 'bignumber.js'
import poolsConfig from 'config/constants/pools'
import sousChefABI from 'config/abi/sousChef.json'
import cakeABI from 'config/abi/cake.json'
import wbnbABI from 'config/abi/weth.json'
import masterchefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import { getAddress, getWbnbAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
import { getSouschefV2Contract } from 'utils/contractHelpers'

export const fetchPoolsBlockLimits = async () => {
  const poolsWithEnd = poolsConfig.filter((p) => p.sousId !== 0)
  if (poolsWithEnd.length === 0) {
    return []
  }
  const callsStartBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.contractAddress),
      name: 'startBlock',
    }
  })
  const callsEndBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.contractAddress),
      name: 'bonusEndBlock',
    }
  })

  const starts = await multicall(sousChefABI, callsStartBlock)
  const ends = await multicall(sousChefABI, callsEndBlock)

  return poolsWithEnd.map((cakePoolConfig, index) => {
    const startBlock = starts[index]
    const endBlock = ends[index]
    return {
      sousId: cakePoolConfig.sousId,
      startBlock: new BigNumber(startBlock).toJSON(),
      endBlock: new BigNumber(endBlock).toJSON(),
    }
  })
}

export const fetchPoolsTotalStaking = async () => {
  const nonBnbPools = poolsConfig.filter((p) => p.stakingToken.symbol !== 'BNB' && p.sousId !== 0)
  const bnbPool = poolsConfig.filter((p) => p.stakingToken.symbol === 'BNB' && p.sousId !== 0)
  const basePool = poolsConfig.filter((p) => p.sousId === 0)

  const callsNonBnbPools =
    nonBnbPools.length !== 0
      ? nonBnbPools.map((poolConfig) => {
          return {
            address: getAddress(poolConfig.stakingToken.address),
            name: 'balanceOf',
            params: [getAddress(poolConfig.contractAddress)],
          }
        })
      : []

  const callsBnbPools =
    bnbPool.length !== 0
      ? bnbPool.map((poolConfig) => {
          return {
            address: getWbnbAddress(),
            name: 'balanceOf',
            params: [getAddress(poolConfig.contractAddress)],
          }
        })
      : []
  const callsBasePools =
    basePool.length !== 0
      ? basePool.map((poolConfig) => {
          return {
            address: poolConfig.contractAddress[parseInt(process.env.REACT_APP_CHAIN_ID, 10)],
            name: 'poolInfo',
            params: [poolConfig.sousId],
          }
        })
      : []

  const nonBnbPoolsTotalStaked = callsNonBnbPools.length !== 0 ? await multicall(cakeABI, callsNonBnbPools) : []
  const bnbPoolsTotalStaked = callsBnbPools.length !== 0 ? await multicall(wbnbABI, callsBnbPools) : []
  const basePoolsTotalStaked = callsBasePools.length !== 0 ? await multicall(masterchefABI, callsBasePools) : []

  return [
    ...nonBnbPools.map((p, index) => ({
      sousId: p.sousId,
      totalStaked: new BigNumber(nonBnbPoolsTotalStaked[index]).toJSON(),
    })),
    ...bnbPool.map((p, index) => ({
      sousId: p.sousId,
      totalStaked: new BigNumber(bnbPoolsTotalStaked[index]).toJSON(),
    })),
    ...basePool.map((p, index) => ({
      sousId: p.sousId,
      totalStaked: basePoolsTotalStaked[0].totalDeposit.toJSON(),
    })),
  ]
}

export const fetchPoolStakingLimit = async (sousId: number): Promise<BigNumber> => {
  try {
    const sousContract = getSouschefV2Contract(sousId)
    const stakingLimit = await sousContract.poolLimitPerUser()
    return new BigNumber(stakingLimit.toString())
  } catch (error) {
    return BIG_ZERO
  }
}

export const fetchPoolsStakingLimits = async (
  poolsWithStakingLimit: number[],
): Promise<{ [key: string]: BigNumber }> => {
  const validPools = poolsConfig
    .filter((p) => p.stakingToken.symbol !== 'BNB' && !p.isFinished)
    .filter((p) => p.sousId !== 0)
    .filter((p) => !poolsWithStakingLimit.includes(p.sousId))

  // Get the staking limit for each valid pool
  // Note: We cannot batch the calls via multicall because V1 pools do not have "poolLimitPerUser" and will throw an error
  const stakingLimitPromises = validPools.map((validPool) => fetchPoolStakingLimit(validPool.sousId))
  const stakingLimits = await Promise.all(stakingLimitPromises)

  return stakingLimits.reduce((accum, stakingLimit, index) => {
    return {
      ...accum,
      [validPools[index].sousId]: stakingLimit,
    }
  }, {})
}

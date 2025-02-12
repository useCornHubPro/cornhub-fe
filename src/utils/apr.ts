import BigNumber from 'bignumber.js'
import { SECONDS_PER_YEAR } from 'config'

/**
 * Get the APR value in %
 * @param stakingTokenPrice Token price in the same quote currency
 * @param rewardTokenPrice Token price in the same quote currency
 * @param totalStaked Total amount of stakingToken in the pool
 * @param tokenPerBlock Amount of new cake allocated to the pool for each new block
 * @returns Null if the APR is NaN or infinite.
 */
export const getPoolApr = (
  pid: number,
  stakingTokenPrice: number,
  rewardTokenPrice: number,
  totalStaked: number,
  tokenPerSecond: string,
): number => {
  const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(tokenPerSecond).times(SECONDS_PER_YEAR) // TODO: Fix pool apr
  const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(totalStaked)
  const apr = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)

  return apr.isNaN() || !apr.isFinite() ? null : apr.toNumber()
}

/**
 * Get farm APR value in %
 * @param poolWeight allocationPoint / totalAllocationPoint
 * @param cakePriceUsd Cake price in USD
 * @param poolLiquidityUsd Total pool liquidity in USD
 * @returns
 *  maniapr apr (100) replace (12610300)
 */
export const getFarmApr = (
  ytknPerSecond: BigNumber,
  cakePriceUsd: BigNumber,
  poolLiquidityUsd: BigNumber,
): { cakeRewardsApr: number; lpRewardsApr: number } => {
  const ytknRewardsApr = ytknPerSecond.times(SECONDS_PER_YEAR).times(cakePriceUsd).div(poolLiquidityUsd).times(100)
  let cakeRewardsAprAsNumber = null
  if (!ytknRewardsApr.isNaN() && ytknRewardsApr.isFinite()) {
    cakeRewardsAprAsNumber = ytknRewardsApr.toNumber()
  }
  const lpRewardsApr = 0 // 0 fee dex
  return { cakeRewardsApr: cakeRewardsAprAsNumber, lpRewardsApr }
}

export default null

import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.czb,
    earningToken: tokens.czb,
    contractAddress: {
      97: '0x348cf34acd0ab88c3364037486234ab6cbc31c4d',
      56: '0x348cf34acd0ab88c3364037486234ab6cbc31c4d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools

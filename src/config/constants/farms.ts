import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0,1,2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CZB',
    lpAddresses: {
      56: '0xD963b2236D227a0302E19F2f9595F424950dc186',
    },
    token: tokens.czb,
    quoteToken: tokens.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'CZB-CZUSD LP',
    lpAddresses: {
      56: '0x6e395da41cf9362d30461d49f23fe57849b18498',
    },
    token: tokens.czb,
    quoteToken: tokens.busd,
  },

  {
    pid: 2,
    lpSymbol: 'CZB-BNB LP',
    lpAddresses: {
      56: '0xCd83118db0BF08e70B08c78346FFd11FD6E7579A',
    },
    token: tokens.czb,
    quoteToken: tokens.wbnb,
  },

  {
    pid: 3,
    lpSymbol: 'CZUSD-BNB LP',
    lpAddresses: {
      56: '0x43f8250b66427fa439760ade4c65bb35228790e5',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default farms

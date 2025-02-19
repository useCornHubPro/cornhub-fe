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

  {
    pid: 25,
    lpSymbol: 'CZUSD-USDT LP',
    lpAddresses: {
      56: '0xA8F9054d78D173f9725A829e286c9a4662E2cCc8',
    },
    token: tokens.busd,
    quoteToken: tokens.usdt,
  },

  {
    pid: 24,
    lpSymbol: 'CZB-USDT LP',
    lpAddresses: {
      56: '0x295b26C2B7ed6CE59E327b4ED0ce84945e5B6C4a',
    },
    token: tokens.usdt,
    quoteToken: tokens.czb,
  },

  {
    pid: 26,
    lpSymbol: 'USTC-CZB LP',
    lpAddresses: {
      56: '0x0190ef686DdB08b8005F22511c28e25163267256',
    },
    token: tokens.ustc,
    quoteToken: tokens.czb,
  },

  {
    pid: 4,
    lpSymbol: 'BTC-CZB LP',
    lpAddresses: {
      56: '0x14290052f20194342078d99e32075Ff66AE0D734',
    },
    token: tokens.btc,
    quoteToken: tokens.czb,
  },
  {
    pid: 5,
    lpSymbol: 'ETH-CZB LP',
    lpAddresses: {
      56: '0xBFd9500E539061759b6fa2EA3c6691714bBF6021',
    },
    token: tokens.eth,
    quoteToken: tokens.czb,
  },
  {
    pid: 6,
    lpSymbol: 'BDOGE-CZB LP',
    lpAddresses: {
      56: '0xcC0321bAEAD2Cb3D76724414c575Ba65bffAd4Cd',
    },
    token: tokens.bdoge,
    quoteToken: tokens.czb,
  },
  {
    pid: 7,
    lpSymbol: 'DOGE-CZB LP',
    lpAddresses: {
      56: '0xa86eA1Bdb00632846B070584083b4b20f6d9970C',
    },
    token: tokens.doge,
    quoteToken: tokens.czb,
  },
  {
    pid: 8,
    lpSymbol: 'PEPE-CZB LP',
    lpAddresses: {
      56: '0x5FE218F3dC1Fa40a09fb3541AA61b738700C8b38',
    },
    token: tokens.pepe,
    quoteToken: tokens.czb,
  },
  {
    pid: 9,
    lpSymbol: 'TRX-CZB LP',
    lpAddresses: {
      56: '0x27210589F5B78fe78DD7BF723556dE3d99AFFFAf',
    },
    token: tokens.trx,
    quoteToken: tokens.czb,
  },
  {
    pid: 10,
    lpSymbol: 'LTC-CZB LP',
    lpAddresses: {
      56: '0xd5D3f75F9B0C70f56e7eA3Ee2F6d6709684BB9cB',
    },
    token: tokens.ltc,
    quoteToken: tokens.czb,
  },
  {
    pid: 11,
    lpSymbol: 'IOTX-CZB LP',
    lpAddresses: {
      56: '0xFDaA99588071CFcb3b95DE9C556B5677c83e7A4e',
    },
    token: tokens.iotx,
    quoteToken: tokens.czb,
  },
  {
    pid: 12,
    lpSymbol: 'NFT-CZB LP',
    lpAddresses: {
      56: '0x3f199E0FD0Aa225c58C1B0aA4107BDd04Ab7ecD6',
    },
    token: tokens.nft,
    quoteToken: tokens.czb,
  },
  {
    pid: 13,
    lpSymbol: 'EGLD-CZB LP',
    lpAddresses: {
      56: '0xa0F20eB890559aC4889c07A937d82f8dAe38056c',
    },
    token: tokens.egld,
    quoteToken: tokens.czb,
  },
  {
    pid: 14,
    lpSymbol: 'BTT-CZB LP',
    lpAddresses: {
      56: '0xbA3F50B898F020F7Bf7196c9734f4E1F5E9fF82a',
    },
    token: tokens.btt,
    quoteToken: tokens.czb,
  },
  {
    pid: 15,
    lpSymbol: 'CAT-CZB LP',
    lpAddresses: {
      56: '0x18499e681C92607C5C5c5078Ad5DCC6a6401786F',
    },
    token: tokens.cat,
    quoteToken: tokens.czb,
  },
  {
    pid: 16,
    lpSymbol: 'LRT-CZB LP',
    lpAddresses: {
      56: '0x6b7f9d8D03A81d84540F0CCbca6f2CF14e377DB5',
    },
    token: tokens.lrt,
    quoteToken: tokens.czb,
  },
  {
    pid: 17,
    lpSymbol: 'SFUND-CZB LP',
    lpAddresses: {
      56: '0x78632163EB85B2eAd89438c463E514D46948681e',
    },
    token: tokens.sfund,
    quoteToken: tokens.czb,
  },
  {
    pid: 18,
    lpSymbol: 'SHIB-CZB LP',
    lpAddresses: {
      56: '0x8b278022e8A1bFB97a6Ae61D8e6328c3E70d9e03',
    },
    token: tokens.shib,
    quoteToken: tokens.czb,
  },
  {
    pid: 19,
    lpSymbol: 'BCH-CZB LP',
    lpAddresses: {
      56: '0x03b2AbAe298178400a393ad044749353CAbcc94e',
    },
    token: tokens.bch,
    quoteToken: tokens.czb,
  },
  {
    pid: 20,
    lpSymbol: 'ETC-CZB LP',
    lpAddresses: {
      56: '0xf15755c0B9dA4af0918CdD493446556edaB7f676',
    },
    token: tokens.etc,
    quoteToken: tokens.czb,
  },
  {
    pid: 21,
    lpSymbol: 'ALU-CZB LP',
    lpAddresses: {
      56: '0x21659d7E4406dEbF1e072003233A0282228cb807',
    },
    token: tokens.alu,
    quoteToken: tokens.czb,
  },
  {
    pid: 22,
    lpSymbol: 'GEM-CZB LP',
    lpAddresses: {
      56: '0xf95AbAef547A6999f6D87380870493Cb7aB1A209',
    },
    token: tokens.gem,
    quoteToken: tokens.czb,
  },
  {
    pid: 23,
    lpSymbol: 'CZR-CZB LP',
    lpAddresses: {
      56: '0x3D314a696D94d25AD7D28bEcF71f20b6199A7a92',
    },
    token: tokens.czr,
    quoteToken: tokens.czb,
  },
]

export default farms

import { ChainId, Token } from '@pancakeswap/sdk'

export const CAKE: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    18,
    'CAKE',
    'PancakeSwap Token',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    18,
    'CAKE',
    'PancakeSwap Token',
  ),
}
export const BUSD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xe68b79e51bf826534ff37aa9cee71a3842ee9c70', 18, 'CZUSD', 'CZUSD'),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    18,
    'BUSD',
    'Binance USD',
  ),
}
export const WBNB = new Token(ChainId.MAINNET, '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 18, 'WBNB', 'Wrapped BNB')
export const DAI = new Token(ChainId.MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD')
export const BTCB = new Token(ChainId.MAINNET, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTC', 'BTC')
export const CZB = new Token(ChainId.MAINNET, '0xd963b2236d227a0302e19f2f9595f424950dc186', 18, 'CZB', 'CZB')
export const CZUSD = new Token(ChainId.MAINNET, '0xe68b79e51bf826534ff37aa9cee71a3842ee9c70', 18, 'CZUSD', 'CZUSD')

export const UST = new Token(
  ChainId.MAINNET,
  '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
  18,
  'UST',
  'Wrapped UST Token',
)

export const ETH = new Token(
  ChainId.MAINNET,
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  18,
  'ETH',
  'Binance-Peg Ethereum Token',
)
export const USDC = new Token(
  ChainId.MAINNET,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
)

const tokens = {
  bnb: {
    symbol: 'BNB',
    projectLink: 'https://www.binance.com/',
  },

  czb: {
    symbol: 'CZB',
    address: {
      56: '0xd963b2236d227a0302e19f2f9595f424950dc186',
    },
    decimals: 18,
    projectLink: 'https://tidaldex.com/',
  },

  busd: {
    symbol: 'CZUSD',
    address: {
      56: '0xe68b79e51bf826534ff37aa9cee71a3842ee9c70',
    },
    decimals: 18,
    projectLink: 'https://czodiac.com/',
  },

  // ***************************************** default token   **********************************

  wbnb: {
    symbol: 'wBNB',
    address: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },

  usdt: {
    symbol: 'USDT',
    address: {
      56: '0x55d398326f99059fF775485246999027B3197955',
    },
    decimals: 18,
    projectLink: 'https://tether.to/',
  },

  // Adding new tokens from tokenlist
  btc: {
    symbol: 'BTC',
    address: {
      56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    },
    decimals: 18,
    projectLink: 'https://bitcoin.org/',
  },
  eth: {
    symbol: 'ETH',
    address: {
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    decimals: 18,
    projectLink: 'https://ethereum.org/',
  },
  bdoge: {
    symbol: 'BDOGE',
    address: {
      56: '0xc748673057861a797275CD8A068AbB95A902e8de',
    },
    decimals: 9,
    projectLink: 'https://babydoge.com/',
  },
  doge: {
    symbol: 'DOGE',
    address: {
      56: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
    },
    decimals: 8,
    projectLink: 'https://dogecoin.com/',
  },
  sfund: {
    symbol: 'SFUND',
    address: {
      56: '0x477bC8d23c634C154061869478bce96BE6045D12',
    },
    decimals: 18,
    projectLink: 'https://seedify.fund/',
  },
  pepe: {
    symbol: 'PEPE',
    address: {
      56: '0x25d887Ce7a35172C62FeBFD67a1856F20FaEbB00',
    },
    decimals: 18,
    projectLink: 'https://pepe.vip/',
  },
  trx: {
    symbol: 'TRX',
    address: {
      56: '0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3',
    },
    decimals: 6,
    projectLink: 'https://tron.network/',
  },
  shib: {
    symbol: 'SHIB',
    address: {
      56: '0x2859e4544C4bB03966803b044A93563Bd2D0DD4D',
    },
    decimals: 18,
  },
  ltc: {
    symbol: 'LTC',
    address: {
      56: '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94',
    },
    decimals: 18,
    projectLink: 'https://litecoin.org/',
  },
  bch: {
    symbol: 'BCH',
    address: {
      56: '0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf',
    },
    decimals: 18,
    projectLink: 'https://bitcoincash.org/',
  },
  iotx: {
    symbol: 'IOTX',
    address: {
      56: '0x9678E42ceBEb63F23197D726B29b1CB20d0064E5',
    },
    decimals: 18,
  },
  etc: {
    symbol: 'ETC',
    address: {
      56: '0x3d6545b08693daE087E957cb1180ee38B9e3c25E',
    },
    decimals: 18,
  },
  nft: {
    symbol: 'NFT',
    address: {
      56: '0x1fC9004eC7E5722891f5f38baE7678efCB11d34D',
    },
    decimals: 6,
  },
  egld: {
    symbol: 'EGLD',
    address: {
      56: '0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe',
    },
    decimals: 18,
  },
  btt: {
    symbol: 'BTT',
    address: {
      56: '0x352Cb5E19b12FC216548a2677bD0fce83BaE434B',
    },
    decimals: 18,
  },
  alu: {
    symbol: 'ALU',
    address: {
      56: '0x8263CD1601FE73C066bf49cc09841f35348e3be0',
    },
    decimals: 18,
  },
  cat: {
    symbol: 'CAT',
    address: {
      56: '0x59F4F336Bf3D0C49dBfbA4A74eBD2a6aCE40539A',
    },
    decimals: 18,
  },
  gem: {
    symbol: 'GEM',
    address: {
      56: '0x701F1ed50Aa5e784B8Fb89d1Ba05cCCd627839a7',
    },
    decimals: 18,
  },
  lrt: {
    symbol: 'LRT',
    address: {
      56: '0xE95412D2d374B957ca7f8d96ABe6b6c1148fA438',
    },
    decimals: 18,
  },
  czr: {
    symbol: 'CZR',
    address: {
      56: '0x5cd0c2C744caF04cda258Efc6558A3Ed3defE97b',
    },
    decimals: 18,
    projectLink: 'https://czodiac.com/',
  },
  czf: {
    symbol: 'CZF',
    address: {
      56: '0x7c1608C004F20c3520f70b924E2BfeF092dA0043',
    },
    decimals: 18,
    projectLink: 'https://czodiac.com/',
  },
  ustc: {
    symbol: 'USTC',
    address: {
      56: '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
    },
    decimals: 18,
  },
}

export default tokens

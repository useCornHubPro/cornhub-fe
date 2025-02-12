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
  '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
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

  czusd: {
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

  busd: {
    symbol: 'CZUSD',
    address: {
      56: '0xe68b79e51bf826534ff37aa9cee71a3842ee9c70',
    },
    decimals: 18,
    projectLink: 'https://czodiac.com/',
  },

  usdt: {
    symbol: 'USDT',
    address: {
      56: '0x55d398326f99059fF775485246999027B3197955',
    },
    decimals: 18,
    projectLink: 'https://tether.to/',
  },
}

export default tokens

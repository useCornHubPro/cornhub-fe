import { ChainId, JSBI, Percent, Token, WETH } from '@pancakeswap/sdk'
import { BUSD, USDT, WBNB, CZB, CZUSD } from './tokens'

export const ROUTER_ADDRESS = '0x71ab950a0c349103967e711b931c460e9580c631'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.MAINNET]: [CZB, CZUSD],
  [ChainId.TESTNET]: [WETH[ChainId.TESTNET]],
}

/**
 * Addittional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WETH[ChainId.MAINNET]]
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.MAINNET]: [CZB, CZUSD, USDT, WETH[ChainId.MAINNET]],
  [ChainId.TESTNET]: [WETH[ChainId.TESTNET]],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.MAINNET]: [CZB, CZUSD, USDT, WETH[ChainId.MAINNET]],
  [ChainId.TESTNET]: [WETH[ChainId.TESTNET]],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [CZB, CZUSD],
    [CZB, WBNB],
    [CZB, USDT],
    [CZB, BUSD[ChainId.MAINNET]],
  ],
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much BNB so they end up with <.01
export const MIN_BNB: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 BNB
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000))

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

// SDN OFAC addresses LAST UPDATE: Feb 8, 2025
// https://github.com/ultrasoundmoney/ofac-ethereum-addresses/raw/refs/heads/main/data.csv
// OFAC is run by retards who dont understand EVM addresses.
// But we block the addresses OFAC asks us to block anyway,
// not because OFAC is effective or legal but just because we cant afford to sue them.
export const BLOCKED_ADDRESSES: string[] = [
  '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
  '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b',
  '0x901bb9583b24D97e995513C6778dc6888AB6870e',
  '0xA7e5d5A720f06526557c513402f2e6B5fA20b008',
  '0x8576aCC5C05D6Ce88f4e49bf65BdF0C62F91353C',
  '0x8576acc5c05d6ce88f4e49bf65bdf0c62f91353c',
  '0x901bb9583b24d97e995513c6778dc6888ab6870e',
  '0xa7e5d5a720f06526557c513402f2e6b5fa20b008',
  '0xd882cfc20f52f2599d84b8e8d58c7fb62cfe344b',
  '0x7f367cc41522ce07553e823bf3be79a889debe1b',
  '0x1da5821544e25c636c1417ba96ade4cf6d2f9b5a',
  '0x7db418b5d567a4e0e8c59ad71be1fce48f3e6107',
  '0x72a5843cc08275c8171e582972aa4fda8c397b2a',
  '0x7f19720a857f834887fc9a7bc0a0fbe7fc7f8102',
  '0x9f4cda013e354b8fc285bf4b9a60460cee7f7ea9',
  '0x2f389ce8bd8ff92de3402ffce4691d17fc4f6535',
  '0x19aa5fe80d33a56d56c78e82ea5e50e5d80b4dff',
  '0xe7aa314c77f4233c18c6cc84384a9247c0cf367b',
  '0x308ed4b7b49797e1a98d3818bff6fe5385410370',
  '0xfec8a60023265364d066a1212fde3930f6ae8da7',
  '0x67d40EE1A85bf4a4Bb7Ffae16De985e8427B6b45',
  '0x6f1ca141a28907f78ebaa64fb83a9088b02a8352',
  '0x6acdfba02d390b97ac2b2d42a63e85293bcc160e',
  '0x48549a34ae37b12f6a30566245176994e17c6b4a',
  '0x5512d943ed1f7c8a43f3435c85f7ab68b30121b0',
  '0xc455f7fd3e0e12afd51fba5c106909934d8a0e4a',
  '0x3cbded43efdaf0fc77b9c55f6fc9988fcc9b757d',
  '0x7ff9cfad3877f21d41da833e2f775db0569ee3d9',
  '0x098b716b8aaf21512996dc57eb0615e2383e2f96',
  '0xa0e1c89ef1a489c9c7de96311ed5ce5d32c20e4b',
  '0x3cffd56b47b7b41c56258d9c7731abadc360e073',
  '0x53b6936513e738f44fb50d2b9476730c0ab3bfc1',
  '0x35fb6f6db4fb05e6a4ce86f2c93691425626d4b1',
  '0xf7b31119c2682c88d88d455dbb9d5932c65cf1be',
  '0x3e37627deaa754090fbfbb8bd226c1ce66d255e9',
  '0x08723392ed15743cc38513c4925f5e6be5c17243',
  '0x8589427373d6d84e98730d7795d8f6f8731fda16',
  '0x722122df12d4e14e13ac3b6895a86e84145b6967',
  '0xdd4c48c0b24039969fc16d1cdf626eab821d3384',
  '0xd90e2f925da726b50c4ed8d0fb90ad053324f31b',
  '0xd96f2b1c14db8458374d9aca76e26c3d18364307',
  '0x4736dcf1b7a3d580672cce6e7c65cd5cc9cfba9d',
  '0xd4b88df4d29f5cedd6857912842cff3b20c8cfa3',
  '0x910cbd523d972eb0a6f4cae4618ad62622b39dbf',
  '0xa160cdab225685da1d56aa342ad8841c3b53f291',
  '0xfd8610d20aa15b7b2e3be39b396a1bc3516c7144',
  '0xf60dd140cff0706bae9cd734ac3ae76ad9ebc32a',
  '0x22aaa7720ddd5388a3c0a3333430953c68f1849b',
  '0xba214c1c1928a32bffe790263e38b4af9bfcd659',
  '0xb1c8094b234dce6e03f10a5b673c1d8c69739a00',
  '0x527653ea119f3e6a1f5bd18fbf4714081d7b31ce',
  '0x58e8dcc13be9780fc42e8723d8ead4cf46943df2',
  '0xd691f27f38b395864ea86cfc7253969b409c362d',
  '0xaeaac358560e11f52454d997aaff2c5731b6f8a6',
  '0x1356c899d8c9467c7f71c195612f8a395abf2f0a',
  '0xa60c772958a3ed56c1f15dd055ba37ac8e523a0d',
  '0x169ad27a470d064dede56a2d3ff727986b15d52b',
  '0x0836222f2b2b24a3f36f98668ed8f0b38d1a872f',
  '0xf67721a2d8f736e75a49fdd7fad2e31d8676542a',
  '0x9ad122c22b14202b4490edaf288fdb3c7cb3ff5e',
  '0x905b63fff465b9ffbf41dea908ceb12478ec7601',
  '0x07687e702b410fa43f4cb4af7fa097918ffd2730',
  '0x94a1b5cdb22c43faab4abeb5c74999895464ddaf',
  '0xb541fc07bc7619fd4062a54d96268525cbc6ffef',
  '0x12d66f87a04a9e220743712ce6d9bb1b5616b8fc',
  '0x47ce0c6ed5b0ce3d3a51fdb1c52dc66a7c3c2936',
  '0x23773e65ed146a459791799d01336db287f25334',
  '0xd21be7248e0197ee08e0c20d4a96debdac3d20af',
  '0x610b717796ad172b316836ac95a2ffad065ceab4',
  '0x178169b423a011fff22b9e3f3abea13414ddd0f1',
  '0xbb93e510bbcd0b7beb5a853875f9ec60275cf498',
  '0x2717c5e28cf931547b621a5dddb772ab6a35b701',
  '0x03893a7c7463ae47d46bc7f091665f1893656003',
  '0xca0840578f57fe71599d29375e16783424023357',
  '0xc2a3829f459b3edd87791c74cd45402ba0a20be3',
  '0x3ad9db589d201a710ed237c829c7860ba86510fc',
  '0x3aac1cc67c2ec5db4ea850957b967ba153ad6279',
  '0x76d85b4c0fc497eecc38902397ac608000a06607',
  '0x0e3a09dda6b20afbb34ac7cd4a6881493f3e7bf7',
  '0x723b78e67497e85279cb204544566f4dc5d2aca0',
  '0xcc84179ffd19a1627e79f8648d09e095252bc418',
  '0x6bf694a291df3fec1f7e69701e3ab6c592435ae7',
  '0x330bdfade01ee9bf63c209ee33102dd334618e0a',
  '0xa5c2254e4253490c54cef0a4347fddb8f75a4998',
  '0xaf4c0b70b2ea9fb7487c7cbb37ada259579fe040',
  '0xdf231d99ff8b6c6cbf4e9b9a945cbacef9339178',
  '0x1e34a77868e19a6647b1f2f47b51ed72dede95dd',
  '0xd47438c816c9e7f2e2888e060936a499af9582b3',
  '0x84443cfd09a48af6ef360c6976c5392ac5023a1f',
  '0xd5d6f8d9e784d0e26222ad3834500801a68d027d',
  '0xaf8d1839c3c67cf571aa74b5c12398d4901147b3',
  '0x407cceeaa7c95d2fe2250bf9f2c105aa7aafb512',
  '0x05e0b5b40b7b66098c2161a5ee11c5740a3a7c45',
  '0xd8d7de3349ccaa0fde6298fe6d7b7d0d34586193',
  '0x3efa30704d2b8bbac821307230376556cf8cc39e',
  '0x746aebc06d2ae31b71ac51429a19d54e797878e9',
  '0x5f6c97c6ad7bdd0ae7e0dd4ca33a4ed3fdabd4d7',
  '0xf4b067dd14e95bab89be928c07cb22e3c94e0daa',
  '0x01e2919679362dfbc9ee1644ba9c6da6d6245bb1',
  '0x2fc93484614a34f26f7970cbb94615ba109bb4bf',
  '0x26903a5a198d571422b2b4ea08b56a37cbd68c89',
  '0xb20c66c4de72433f3ce747b58b86830c459ca911',
  '0x2573bac39ebe2901b4389cd468f2872cf7767faf',
  '0x653477c392c16b0765603074f157314cc4f40c32',
  '0x88fd245fedec4a936e700f9173454d1931b4c307',
  '0x09193888b3f38c82dedfda55259a82c0e7de875e',
  '0x5cab7692d4e94096462119ab7bf57319726eed2a',
  '0x756c4628e57f7e7f8a459ec2752968360cf4d1aa',
  '0xd82ed8786d7c69dc7e052f7a542ab047971e73d2',
  '0x77777feddddffc19ff86db637967013e6c6a116c',
  '0x833481186f16cece3f1eeea1a694c42034c3a0db',
  '0xb04e030140b30c27bcdfaafffa98c57d80eda7b4',
  '0xcee71753c9820f063b38fdbe4cfdaf1d3d928a80',
  '0x8281aa6795ade17c8973e1aedca380258bc124f9',
  '0x57b2b8c82f065de8ef5573f9730fc1449b403c9f',
  '0x23173fe8b96a4ad8d2e17fb83ea5dcccdca1ae52',
  '0x538ab61e8a9fc1b2f93b3dd9011d662d89be6fe6',
  '0x94be88213a387e992dd87de56950a9aef34b9448',
  '0x242654336ca2205714071898f67e254eb49acdce',
  '0x776198ccf446dfa168347089d7338879273172cf',
  '0xedc5d01286f99a066559f60a585406f3878a033e',
  '0xd692fd2d0b2fbd2e52cfa5b5b9424bc981c30696',
  '0xdf3a408c53e5078af6e8fb2a85088d46ee09a61b',
  '0x743494b60097a2230018079c02fe21a7b687eaa5',
  '0x94c92f096437ab9958fc0a37f09348f30389ae79',
  '0x5efda50f22d34f262c29268506c5fa42cb56a1ce',
  '0x2f50508a8a3d323b91336fa3ea6ae50e55f32185',
  '0x179f48c78f57a3a78f0608cc9197b8972921d1d2',
  '0xffbac21a641dcfe4552920138d90f3638b3c9fba',
  '0xd0975b32cea532eadddfc9c60481976e39db3472',
  '0x1967d8af5bd86a497fb3dd7899a020e47560daaf',
  '0x83e5bc4ffa856bb84bb88581f5dd62a433a25e0d',
  '0x08b2eFdcdB8822EfE5ad0Eae55517cf5DC544251',
  '0x04DBA1194ee10112fE6C3207C0687DEf0e78baCf',
  '0x0Ee5067b06776A89CcC7dC8Ee369984AD7Db5e06',
  '0x502371699497d08D5339c870851898D6D72521Dd',
  '0x5A14E72060c11313E38738009254a90968F58f51',
  '0xEFE301d259F525cA1ba74A7977b80D5b060B3ccA',
  '0x39d908dac893cbcb53cc86e0ecc369aa4def1a29',
  '0x4f47bc496083c727c5fbe3ce9cdf2b0f6496270c',
  '0x38735f03b30FbC022DdD06ABED01F0Ca823C6a94',
  '0x97b1043abd9e6fc31681635166d430a458d14f9c',
  '0xb6f5ec1a0a9cd1526536d3f0426c429529471f40',
  '0xdcbEfFBECcE100cCE9E4b153C4e15cB885643193',
  '0x5f48c2a71b2cc96e3f0ccae4e39318ff0dc375b2',
  '0x5a7a51bfb49f190e5a6060a5bc6052ac14a3b59f',
  '0xed6e0a7e4ac94d976eebfb82ccf777a3c6bad921',
  '0x797d7ae72ebddcdea2a346c1834e04d1f8df102b',
  '0x931546D9e66836AbF687d2bc64B30407bAc8C568',
  '0x43fa21d92141BA9db43052492E0DeEE5aa5f0A93',
  '0x6be0ae71e6c41f2f9d0d1a3b8d0f75e6f6a0b46e',
  '0x9c2bc757b66f24d60f016b6237f8cdd414a879fa',
  '0x530a64c0ce595026a4a556b703644228179e2d57',
  '0xfac583c0cf07ea434052c49115a4682172ab6b4f',
  '0x961c5be54a2ffc17cf4cb021d863c42dacd47fc1',
  '0x983a81ca6fb1e441266d2fbcb7d8e530ac2e05a2',
  '0xf3701f445b6bdafedbca97d1e477357839e4120d',
  '0xe950dc316b836e4eefb8308bf32bf7c72a1358ff',
  '0x21b8d56bda776bbe68655a16895afd96f5534fed',
  '0x175d44451403edf28469df03a9280c1197adb92c',
  '0x19f8f2b0915daa12a3f5c9cf01df9e24d53794f7',
]

export { default as farmsConfig } from './farms'
export { default as poolsConfig } from './pools'
export { default as ifosConfig } from './ifo'

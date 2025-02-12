import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    56: '0xb88af3f097e12e6509bc47ff3654ba7cc0716ac0',
    97: '0xb88af3f097e12e6509bc47ff3654ba7cc0716ac0',
  }

  it(`get address for mainnet (chainId 56)`, () => {
    process.env.REACT_APP_CHAIN_ID = '56'
    const expected = address[56]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 97)`, () => {
    process.env.REACT_APP_CHAIN_ID = '97'
    const expected = address[97]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.REACT_APP_CHAIN_ID = '31337'
    const expected = address[56]
    expect(getAddress(address)).toEqual(expected)
  })
})

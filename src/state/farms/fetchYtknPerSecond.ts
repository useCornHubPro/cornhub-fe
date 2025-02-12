import masterchefABI from 'config/abi/masterchef.json'
import { getMasterChefAddress } from 'utils/addressHelpers'
import multicall from 'utils/multicall'
import { formatEther } from '@ethersproject/units'

export const fetchYtknPerSecond = async (): Promise<string> => {
  const masterChefAddress = getMasterChefAddress()
  const calls = [
    {
      address: masterChefAddress,
      name: 'ytknPerSecond',
    },
  ]
  const ytknPerSecond = formatEther((await multicall(masterchefABI, calls))[0][0])
  return ytknPerSecond
}

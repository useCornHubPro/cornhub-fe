import masterchefABI from 'config/abi/masterchef.json'
import { getMasterChefAddress } from 'utils/addressHelpers'
import multicall from 'utils/multicall'

export const fetchTotalAlloc = async (): Promise<bigint> => {
  const masterChefAddress = getMasterChefAddress()
  const calls = [
    {
      address: masterChefAddress,
      name: 'totalAllocPoint',
    },
  ]
  const totalAllocPoint = (await multicall(masterchefABI, calls))[0][0]
  return totalAllocPoint
}

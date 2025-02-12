import { useEffect, useState, useRef } from 'react'
import { useWeb3React } from '@web3-react/core'
import { simpleRpcProvider } from 'utils/providers'

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
const useActiveWeb3React = () => {
  const { provider, chainId, account, isActive, ...web3React } = useWeb3React()
  const refEth = useRef(provider)
  const [activeProvider, setActiveProvider] = useState(provider || simpleRpcProvider)

  useEffect(() => {
    if (provider !== refEth.current) {
      setActiveProvider(provider || simpleRpcProvider)
      refEth.current = provider
    }
  }, [provider])

  return {
    library: activeProvider,
    provider: activeProvider,
    chainId: chainId ?? parseInt(process.env.REACT_APP_CHAIN_ID, 10),
    account,
    isActive,
    ...web3React,
  }
}

export default useActiveWeb3React

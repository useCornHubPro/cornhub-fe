import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import { ConnectorNames, connectorLocalStorageKey } from '@pancakeswap/uikit'
import { connectorsByName } from 'utils/web3React'
import { setupNetwork } from 'utils/wallet'
import useToast from 'hooks/useToast'
import { profileClear } from 'state/profile'
import { useAppDispatch } from 'state'
import { useTranslation } from 'contexts/Localization'

const useAuth = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { connector, provider, chainId } = useWeb3React()
  const { toastError, toastInfo } = useToast()
  const login = useCallback(
    async (connectorID: ConnectorNames) => {
      const selectedConnector = connectorsByName[connectorID]
      if (selectedConnector) {
        try {
          if (connectorID === ConnectorNames.WalletConnect) {
            toastInfo('WalletConnect loading...')
            await selectedConnector.deactivate()
            await selectedConnector.activate(parseInt(process.env.REACT_APP_CHAIN_ID, 10))
            toastInfo('WalletConnect loaded')
          } else {
            await selectedConnector.activate(parseInt(process.env.REACT_APP_CHAIN_ID, 10))
          }
        } catch (error) {
          if (error.name === 'UnsupportedChainIdError') {
            const hasSetup = await setupNetwork()
            if (hasSetup) {
              selectedConnector.activate(parseInt(process.env.REACT_APP_CHAIN_ID, 10))
            }
          } else {
            window.localStorage.removeItem(connectorLocalStorageKey)
            if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
              toastError(t('Provider Error'), t('No provider was found'))
            } else if (error instanceof UserRejectedRequestErrorInjected) {
              toastError(t('Authorization Error'), t('Please authorize to access your account'))
            } else {
              toastError(error.name, error.message)
            }
          }
        }
      } else {
        toastError(t('Unable to find connector'), t('The connector config is wrong'))
      }
    },
    [t, toastError, toastInfo],
  )

  const logout = useCallback(() => {
    dispatch(profileClear())
    if (connector?.deactivate) {
      connector.deactivate()
    } else {
      connector?.resetState()
    }
    // This localStorage key is set by @web3-react/walletconnect-connector
    /*
    if (window.localStorage.getItem('walletconnect')) {
      connectorsByName.walletconnect.close()
      connectorsByName.walletconnect.walletConnectProvider = null
    }
      */
    window.localStorage.removeItem(connectorLocalStorageKey)
  }, [connector, dispatch])

  return { login, logout }
}

export default useAuth

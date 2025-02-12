import React, { ReactNode, useCallback, useState } from 'react'
import { kebabCase } from 'lodash'
import { Toast, toastTypes } from '@pancakeswap/uikit'
import { ToastContextApi } from './types'
import { ToastsContext } from './ToastsContext'

export const ToastsProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = useState<ToastContextApi['toasts']>([])

  const toast = useCallback(
    ({ title, description, type }: Omit<Toast, 'id'>) => {
      setToasts((prevToasts) => {
        const id = kebabCase(title)

        // Remove any existing toasts with the same id
        const currentToasts = prevToasts.filter((prevToast) => prevToast.id !== id)

        return [
          {
            id,
            title,
            description,
            type,
          },
          ...currentToasts,
        ]
      })
    },
    [setToasts],
  )

  const toastError = (title: string, description?: ReactNode) => {
    return toast({ title, description, type: toastTypes.DANGER })
  }
  const toastInfo = (title: string, description?: ReactNode) => {
    return toast({ title, description, type: toastTypes.INFO })
  }
  const toastSuccess = (title: string, description?: ReactNode) => {
    return toast({ title, description, type: toastTypes.SUCCESS })
  }
  const toastWarning = (title: string, description?: ReactNode) => {
    return toast({ title, description, type: toastTypes.WARNING })
  }
  const clear = () => setToasts([])
  const remove = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id))
  }

  const contextValue = {
    toasts,
    clear,
    remove,
    toastError,
    toastInfo,
    toastSuccess,
    toastWarning,
  }

  return <ToastsContext.Provider value={contextValue}>{children}</ToastsContext.Provider>
}

// New hook to use the context
export const useToast = () => {
  const context = React.useContext(ToastsContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastsProvider')
  }
  return context
}

import React from 'react'
import { ToastContainer } from '@pancakeswap/uikit'
import { useToast } from './Provider'

const ToastListener = () => {
  const { toasts, remove } = useToast()

  const handleRemove = (id: string) => remove(id)

  return <ToastContainer toasts={toasts} onRemove={handleRemove} />
}

export default ToastListener

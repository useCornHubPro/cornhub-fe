import { createContext } from 'react'
import { ToastContextApi } from './types'

export const ToastsContext = createContext<ToastContextApi>(undefined)

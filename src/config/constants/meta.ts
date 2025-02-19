import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'CornHub - (BSC)',
  description: 'Earn CZB through yield farming ',
  image: 'https://tidaldex.com/images/swapimg/twitter.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('CornHub')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('CornHub')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('CornHub')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('CornHub')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('CornHub')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('CornHub')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('CornHub')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('CornHub')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('CornHub')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('CornHub')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('CornHub')}`,
      }
    default:
      return null
  }
}

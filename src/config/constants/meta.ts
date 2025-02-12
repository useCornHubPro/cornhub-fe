import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Tidaldex - (BSC)',
  description: 'Earn CZB through yield farming ',
  image: 'https://tidaldex.com/images/swapimg/twitter.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Tidaldex')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Tidaldex')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Tidaldex')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Tidaldex')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Tidaldex')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Tidaldex')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Tidaldex')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Tidaldex')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Tidaldex')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Tidaldex')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Tidaldex')}`,
      }
    default:
      return null
  }
}

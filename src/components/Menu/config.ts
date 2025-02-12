import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    // icon: 'Link2Icon',
    icon: 'HomeIcon',
    href: '/',
  },

  /* items: [
		   
			{
			label: t('Testnet'),
			href: 'https://tidaldex.com/',
			},
				
		], */

  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap?outputCurrency=0xd963b2236d227a0302e19f2f9595f424950dc186',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },
    ],
  },

  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },

  {
    label: t('More'),
    icon: 'MoreIcon',

    items: [
      /* {
				label: t('Info'),
				icon: 'InfoIcon',
				href: 'https://info.tidaldex.com',
				}, */

      {
        label: t('Docs'),
        icon: 'InfoIcon',
        href: 'https://docs.czodiac.com',
      },
    ],
  },
]

export default config

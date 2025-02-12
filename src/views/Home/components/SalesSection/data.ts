import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'CAKE', alt: 'CAKE token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'Tidaldex makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with CZB token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'Tidaldex',
  bodyText: 'Trade, stake, and savor the sweetness of crypto on the most rewarding decentralized platform',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0xd963b2236d227a0302e19f2f9595f424950dc186',
    text: 'Swap',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/tokenomics/cake',
    text: '',
    external: true,
  },

  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'Tidaldex', alt: 'Tidaldex token' },

      // { src: 'BNB', alt: 'BNB token' },
      // { src: 'BTC', alt: 'BTC token' },
      // { src: 'CAKE', alt: 'CAKE token' },
    ],
  },
}

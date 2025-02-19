import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}
/*  font-family: 'Poppins', sans-serif; */
const GlobalStyle = createGlobalStyle`
  * {
   
	font-family: 'Kanit', sans-serif;
  }
  body {
    background-image: ${({ theme }) =>
      theme.isDark ? "url('images/backgrounds/bg-tile-dark.png')" : "url('/images/backgrounds/bg-tile-light.png')"};
    animation: animatedBackground 45s ease-in-out infinite;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle

import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import CakeDataRowTvl from './components/CakeDataRowTvl'
// import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 0px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0px;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '98%' }

  return (
    <>
      {/* : 'linear-gradient(180deg, #6FB6F1 0%)' */}

      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark ? 'linear-gradient(180deg, #6FB6F1 0%)' : 'linear-gradient(180deg, #fff 0%, #fff 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...cakeSectionData} />
      </PageSection>

      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="none"
        index={2}
        hasCurvedDivider={false}
      >
        <CakeDataRow />
        <FarmsPoolsRow />
      </PageSection>

      <br />

      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        // background="linear-gradient(180deg, #7645D9 0%, #5121B1 100%)"
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #1f2022 0%, #1f2022 100%)'
            : 'linear-gradient(180deg, #1f2022  0%, #1f2022  100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <Footer />
      </PageSection>
    </>
  )
}

export default Home

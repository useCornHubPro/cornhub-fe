import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, Link } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Container from 'components/Layout/Container'
import { useWeb3React } from '@web3-react/core'
import SunburstSvg from './SunburstSvg'
import CompositeImage from './CompositeImage'

const BgWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`

const StyledSunburst = styled(SunburstSvg)`
  height: 350%;
  width: 350%;

  ${({ theme }) => theme.mediaQueries.xl} {
    height: 400%;
    width: 400%;
  }
`

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const FloatingPancakesWrapper = styled(Container)`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;

  ${({ theme }) => theme.mediaQueries.md} {
    visibility: visible;
  }
`

const TopLeftImgWrapper = styled(Flex)`
  position: absolute;
  left: 0;
  top: 5px;
  max-width: 100px;
`

const BottomRightImgWrapper = styled(Flex)`
  position: absolute;
  right: 0;
  bottom: 15px;
  max-width: 100px;
`

const topLeftImage = {
  path: '/images/flying-waves/',
  attributes: [
    { src: 'waves-green', alt: 'Wave flying on the bottom' },
    { src: 'waves-cyan', alt: 'Wave flying on the top' },
    { src: 'waves-blue', alt: 'Wave flying on the right' },
  ],
}

const bottomRightImage = {
  path: '/images/flying-waves/',
  attributes: [
    { src: 'waves-green', alt: 'Wave flying on the bottom' },
    { src: 'waves-cyan', alt: 'Wave flying on the top' },
    { src: 'waves-blue', alt: 'Wave flying on the right' },
  ],
}

const Footer = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>
      <BgWrapper>
        <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
          <StyledSunburst />
        </Flex>
      </BgWrapper>
      <FloatingPancakesWrapper className="floating-pancakes-wrapper">
        <TopLeftImgWrapper>
          <CompositeImage {...topLeftImage} maxHeight="256px" />
        </TopLeftImgWrapper>
        <BottomRightImgWrapper>
          <CompositeImage {...bottomRightImage} maxHeight="256px" />
        </BottomRightImgWrapper>
      </FloatingPancakesWrapper>

      <Wrapper className="mainfooter">
        <Wrapper className="div1">
          <Heading className="heading" mb="24px" scale="xl" color="white">
            {t('Join the TidalDex community')}
          </Heading>
          <Text className="subtext" textAlign="center" color="white">
            {t('Take part in the conversation! Stay in the know & be the first to hear about any new updates')}
          </Text>
        </Wrapper>

        <Wrapper className="div2">
          <Wrapper className="socialbox">
            <Link className="web" external href="https://czodiac.com/">
              {t('')}
            </Link>
            <Link className="telegram" external href="https://t.me/CZodiacofficial">
              {t('')}
            </Link>
            <Link className="twitter" external href="https://twitter.com/zodiacs_c">
              {t('')}
            </Link>

            <Link className="github" external href="https://github.com/chinese-zodiac">
              {t('')}
            </Link>

            {/* <Link className="tiktok" external href="https://www.tiktok.com/@tidaldex">
              {t('')}
            </Link> */}
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  )
}

export default Footer

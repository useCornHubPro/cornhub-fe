import React from 'react'
import styled from 'styled-components'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber, formatLocalisedCompactNumber, formatNumber } from 'utils/formatBalance'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { Flex, Text, Heading, Image, Skeleton } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { parseEther } from 'ethers/lib/utils'
import { useGlitch } from 'react-powerglitch'

import Balance from 'components/Balance'

const StyledColumn = styled(Flex)<{ noMobileBorder?: boolean }>`
  flex-direction: column;
  ${({ noMobileBorder, theme }) =>
    noMobileBorder
      ? `${theme.mediaQueries.md} {
           padding: 0 16px;
           border-left: 1px ${theme.colors.inputSecondary} solid;
         }
       `
      : `border-left: 1px ${theme.colors.inputSecondary} solid;
         padding: 0 8px;
         ${theme.mediaQueries.sm} {
           padding: 0 16px;
         }
       `}
`
const StyledImage = styled(Image)``

const Grid = styled.div`
  display: grid;
  grid-gap: 16px 8px;
  margin-top: 24px;
  grid-template-columns: repeat(2, auto);

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 32px;
    grid-template-columns: repeat(3, auto);
  }
`

const emissionsPerBlock = 48

const CakeDataRow = () => {
  const { t } = useTranslation()
  const glitch1 = useGlitch({
    glitchTimeSpan: {
      start: 0.44,
      end: 0.54,
    },
    slice: {
      count: 7,
      velocity: 11,
      minHeight: 0.07,
      maxHeight: 0.72,
    },
  })
  const glitch2 = useGlitch({
    glitchTimeSpan: {
      start: 0.25,
      end: 0.56,
    },
    shake: {
      velocity: 18,
      amplitudeX: 0.54,
      amplitudeY: 0.05,
    },
    slice: {
      count: 7,
      velocity: 11,
      minHeight: 0.07,
      maxHeight: 0.72,
    },
  })
  const glitch3 = useGlitch({
    glitchTimeSpan: {
      start: 0.82,
      end: 1,
    },
    shake: {
      velocity: 10,
      amplitudeX: 0.16,
      amplitudeY: 0.63,
    },
    slice: {
      count: 4,
      velocity: 14,
      minHeight: 0.16,
      maxHeight: 0.27,
    },
  })

  //   const totalSupply = useTotalSupply()
  //  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  //  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  // const cakePriceBusd = usePriceCakeBusd()
  // const mcap = cakePriceBusd.times(cakeSupply)
  //  const mcapString = formatLocalisedCompactNumber(mcap.toNumber())

  // ************* tsuply price mcap burned   ****************
  const totalSupply = useTotalSupply()
  const burnedBalance = totalSupply ? 1000000000 - getBalanceNumber(totalSupply) : 0
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) : 0
  const CirculationBalance = cakeSupply
  const cakePriceBusd = usePriceCakeBusd()
  const mcap = cakePriceBusd.times(cakeSupply)

  const mcapString = formatNumber(mcap.toNumber())

  // ************* tsuply ****************

  return (
    <Grid className="supplymain">
      <StyledColumn className="box1">
        <Flex flexDirection="column" ref={glitch1.ref}>
          <StyledImage className="iconimage" src="/images/home/icon1.png" alt="" width={64} height={64} /> {t('')}
          <Text color="#000" marginBottom={1}>
            {t('Max supply')}
          </Text>
          {cakeSupply ? (
            <Balance decimals={0} lineHeight="1.1" color="#e18700" fontSize="24px" bold value={1000000000} />
          ) : (
            <Skeleton height={24} width={126} my="4px" />
          )}
        </Flex>
      </StyledColumn>

      <StyledColumn className="box1">
        <Flex flexDirection="column" ref={glitch3.ref}>
          <StyledImage className="iconimage" src="/images/home/icon2.png" alt="AmpleSwap" width={64} height={64} />{' '}
          {t('')}
          <Text color="#000" marginBottom={1}>
            {t('Circulating supply')}
          </Text>
          {CirculationBalance ? (
            <Balance decimals={0} lineHeight="1.1" color="#e18700" fontSize="24px" bold value={CirculationBalance} />
          ) : (
            <Skeleton height={24} width={126} my="4px" />
          )}
        </Flex>
      </StyledColumn>

      <StyledColumn className="box1" noMobileBorder>
        <Flex flexDirection="column" ref={glitch2.ref}>
          <StyledImage className="iconimage" src="/images/home/icon3.png" alt="AmpleSwap" width={64} height={64} />{' '}
          {t('')}
          <Text color="#000">{t('Total Burned')}</Text>
          {burnedBalance ? (
            <Heading scale="lg">
              <Balance color="#e18700" fontSize="24px" bold decimals={0} value={burnedBalance} />
            </Heading>
          ) : (
            <Skeleton height={24} width={126} my="4px" />
          )}
        </Flex>
      </StyledColumn>
    </Grid>
  )
}

export default CakeDataRow

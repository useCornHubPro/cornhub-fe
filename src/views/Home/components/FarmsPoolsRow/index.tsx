import React, { useState, useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components'
import { Flex, Box, SwapVertIcon, IconButton } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { Pool } from 'state/types'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import useGetTopFarmsByApr from 'views/Home/hooks/useGetTopFarmsByApr'
import useGetTopPoolsByApr from 'views/Home/hooks/useGetTopPoolsByApr'
import TopFarmPool from './TopFarmPool'
import RowHeading from './RowHeading'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
    grid-template-columns: repeat(5, auto);
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 32px;
  }
`

const FarmsPoolsRow = () => {
  const [showFarms, setShowFarms] = useState(false)
  const { t } = useTranslation()
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const { topFarms } = useGetTopFarmsByApr(isIntersecting)
  const { topPools } = useGetTopPoolsByApr(isIntersecting)

  const timer = useRef<ReturnType<typeof setTimeout>>(null)
  const isLoaded = topFarms[0] && topPools[0]

  const startTimer = useCallback(() => {
    timer.current = setInterval(() => {
      setShowFarms((prev) => !prev)
    }, 6000)
  }, [timer])

  useEffect(() => {
    if (isLoaded) {
      startTimer()
    }

    return () => {
      clearInterval(timer.current)
    }
  }, [timer, isLoaded, startTimer])

  const getPoolText = (pool: Pool) => {
    if (pool.isAutoVault) {
      return t('Auto CZB')
    }

    if (pool.sousId === 0) {
      return t('Manual CZB')
    }

    return t('Stake %stakingSymbol% - Earn %earningSymbol%', {
      earningSymbol: pool.earningToken.symbol,
      stakingSymbol: pool.stakingToken.symbol,
    })
  }

  return (
    <div className="syrupmain" ref={observerRef}>
      <Flex className="poolsmain" flexDirection="column" mt="24px">
        <Flex className="poolstitle" mb="24px">
          <RowHeading text={showFarms ? t('Top Farms') : t('Top Pools')} />
          <IconButton
            variant="text"
            height="100%"
            width="auto"
            onClick={() => {
              setShowFarms((prev) => !prev)
              clearInterval(timer.current)
            }}
          >
            <SwapVertIcon height="24px" width="24px" color="#e18700" />
          </IconButton>
        </Flex>
        <Box height={['240px', null, '80px']}>
          <Grid>
            {topFarms.map((topFarm, index) => (
              <TopFarmPool
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                title={topFarm?.lpSymbol}
                percentage={topFarm?.apr ?? 0 + topFarm?.lpRewardsApr ?? 0}
                index={index}
                visible={showFarms}
              />
            ))}
          </Grid>
          <Grid>
            {topPools.map((topPool, index) => (
              <TopFarmPool
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                title={topPool && getPoolText(topPool)}
                percentage={topPool?.apr}
                index={index}
                visible={!showFarms}
              />
            ))}
          </Grid>
        </Box>
      </Flex>
    </div>
  )
}

export default FarmsPoolsRow

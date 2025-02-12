import React from 'react'
import styled from 'styled-components'
import { ButtonMenuItem } from '@pancakeswap/uikit'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: space-between;
    flex-direction: row;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <ButtonMenuItem as="a" display="none">
        Tidaldex
      </ButtonMenuItem>
    </Wrapper>
  )
}

export default Footer

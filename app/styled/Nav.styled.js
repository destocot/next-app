'use client'
import styled from 'styled-components'
import { FiShoppingCart } from 'react-icons/fi'

export const Nav = styled.nav`
  background-color: white;
  padding: 2rem;
  height: 36px;
`

export const NavContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      cursor: pointer;
    }
  }
`

export const ShoppingCart = styled(FiShoppingCart)`
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
  }
`

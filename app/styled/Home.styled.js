'use client'
import styled from 'styled-components'

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  margin: 0.5rem 0;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      cursor: pointer;
    }
  }
`

export const Container = styled.div`
  background-color: white;
  min-height: 200px;
  position: relative;
  padding: 1rem 2rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`
export const Price = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
  font-size: 2.5rem;
`

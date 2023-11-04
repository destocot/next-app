'use client'
import { ShoppingCart } from '../app/styled/Nav.styled'
import useCart from '../hooks/useCart'

const Cart = () => {
  const { openCart } = useCart()

  const handleClick = () => {
    openCart()
  }

  return <ShoppingCart onClick={handleClick} />
}

export default Cart

'use client'
import Link from 'next/link'
import { Container, Price, ProductsContainer } from '../app/styled/Home.styled'
import useCart from '../hooks/useCart'

const ProductList = ({ products }) => {
  const { cart, addItemToCart } = useCart()
  // console.log(cart)

  const handleClick = (e, product) => {
    e.preventDefault()
    addItemToCart(product)
  }

  return (
    <ProductsContainer>
      {products.map((product) => (
        <Link href={product.slug} key={product.id}>
          <Container>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <button onClick={(e) => handleClick(e, product)}>
              Add to cart
            </button>
            <Price>${product.price / 100}</Price>
          </Container>
        </Link>
      ))}
    </ProductsContainer>
  )
}

export default ProductList

import Link from 'next/link'
import { Nav, NavContainer } from '../app/styled/Nav.styled'
import CartIcon from '../components/CartIcon'

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Link href="/">Super Store 2</Link>
        <CartIcon />
      </NavContainer>
    </Nav>
  )
}

export default Navbar

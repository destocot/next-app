import StyledComponentsRegistry from '../utils/registry'
import 'normalize.css/normalize.css'
import { Container, Page } from './styled/Root.styled'
import Navbar from '../components/Navbar'
import CartProvider from '../context/Cart'
import Cart from '../components/Cart'

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <CartProvider>
            <Container>
              <Navbar />
              <Page>{children}</Page>
              <Cart />
            </Container>
          </CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout

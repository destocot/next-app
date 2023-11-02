import Link from 'next/link'

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        {children}
        <footer>Khurram Ali was here</footer>
      </body>
    </html>
  )
}

export default RootLayout

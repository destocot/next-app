import Link from 'next/link'

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Link href="/">Home</Link>
        {children}
      </body>
    </html>
  )
}

export default RootLayout

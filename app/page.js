import fs from 'node:fs'
import matter from 'gray-matter'
import Link from 'next/link'

const HomePage = async () => {
  const products = await getProducts()

  return products.map((product) => {
    return (
      <div key={product.name}>
        <Link href={product.slug}>
          <h1>{product.name}</h1>
        </Link>
        <p>{product.description}</p>
        <p>${product.price / 100}</p>
      </div>
    )
  })

  return (
    <div>
      <h1>Welcome to our custom Next.js app!</h1>
    </div>
  )
}

const getProducts = () => {
  const directory = `${process.cwd()}/content`
  const filenames = fs.readdirSync(directory)

  const products = filenames.map((filename) => {
    // read the file from fs
    const fileContent = fs.readFileSync(`${directory}/${filename}`).toString()
    // pull out frontmatter => name
    const { data } = matter(fileContent)
    // return name, slug
    const slug = `/products/${filename.replace('.md', '')}`
    const product = { ...data, slug }
    return product
  })

  return products
}

export default HomePage

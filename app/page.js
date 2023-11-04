import fs from 'node:fs'
import matter from 'gray-matter'
import ProductList from '../components/ProductList'

const HomePage = async () => {
  const products = await getProducts()
  return <ProductList products={products} />
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

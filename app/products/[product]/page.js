import matter from 'gray-matter'
import fs from 'node:fs'
import { marked } from 'marked'

const Product = async ({ params }) => {
  const { data, content } = await getProductInfo(params.product)
  const html = marked(content)
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>${data.price / 100}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

const getProductInfo = (productName) => {
  const filePath = `${process.cwd()}/content/${productName}.md`
  const fileContent = fs.readFileSync(filePath).toString()
  const { data, content } = matter(fileContent)

  return {
    data,
    content,
  }
}
export default Product

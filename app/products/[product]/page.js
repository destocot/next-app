import matter from 'gray-matter'
import fs from 'node:fs'
import { marked } from 'marked'
import { Price, SubTitle, Title } from '../../styled/Product.styled'
import Page from '../../styled/Page.styled'

const Product = async ({ params }) => {
  const { data, content } = await getProductInfo(params.product)
  const html = marked(content)
  return (
    <Page>
      <Title>
        <h1>{data.name}</h1>
        <SubTitle>{data.description}</SubTitle>
      </Title>
      <Price>${data.price / 100}</Price>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
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

import data from '../data.json'

export default async function GET() {
  const featuredProducts = data.products.filter((product) => product.featured)

  return Response.json(featuredProducts)
}

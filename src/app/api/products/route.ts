import data from './data.json'

export default async function GET() {
  return Response.json(data.products)
}

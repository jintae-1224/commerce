import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getProductsCount() {
  try {
    const response = await prisma.products.count()
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
  }
}

type Data = {
  products?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const products = await getProductsCount()
    res.status(200).json({ products: products, message: 'Success' })
  } catch (error) {
    return res.status(400).json({ message: 'Fail To Load' })
  }
}

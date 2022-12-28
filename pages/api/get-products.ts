import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getProducts(skip: number, take: number) {
  try {
    const response = await prisma.products.findMany({
      skip: skip,
      take: take,
    })
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
  const { skip, take } = req.query

  if (skip === null || take === null) {
    return res.status(400).json({ message: 'No Skip or No Take' })
  }
  try {
    const products = await getProducts(Number(skip), Number(take))
    res.status(200).json({ products: products, message: 'Success' })
  } catch (error) {
    return res.status(400).json({ message: 'Fail To Load' })
  }
}

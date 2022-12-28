import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function updateProduct(id: number, contents: string) {
  try {
    const response = await prisma.products.update({
      where: {
        id: id,
      },
      data: {
        contents: contents,
      },
    })
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
  }
}

type Data = {
  item?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id, contents } = JSON.parse(req.body)

  if (id === null || contents === null) {
    return res.status(400).json({ message: 'No ID or No Contents' })
  }
  try {
    const products = await updateProduct(Number(id), contents)
    res.status(200).json({ item: products, message: 'Success' })
  } catch (error) {
    return res.status(400).json({ message: 'Fail To Load' })
  }
}

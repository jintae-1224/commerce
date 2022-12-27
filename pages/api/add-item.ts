import { Client } from '@notionhq/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const notion = new Client({
  auth: process.env.AUTH,
})

const databaseId = String(process.env.DATABASEID)

async function addItem(name: string) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
    })
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query

  if (name === null) {
    return res.status(400).json({ message: 'No Name' })
  }
  try {
    await addItem(String(name))
    res.status(200).json({ message: `Success ${name} add` })
  } catch (error) {
    return res.status(400).json({ message: 'Fail To add' })
  }
}

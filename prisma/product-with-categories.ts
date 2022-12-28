import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const dummy = [
  {
    name: `Sneakers 1`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Sneakers 1}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Sneakers 2`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Sneakers 2}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://cdn.pixabay.com/photo/2017/04/08/16/16/kicks-2213619_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Sneakers 3`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Sneakers 3}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://cdn.pixabay.com/photo/2014/05/18/11/26/shoes-346986_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Sneakers 4`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Sneakers 4}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://cdn.pixabay.com/photo/2015/07/05/23/28/shoes-832875_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Sneakers 5`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Sneakers 5}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Sneakers 6`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Sneakers 6}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://cdn.pixabay.com/photo/2014/11/14/19/57/sneakers-531172_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Sneakers 7`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Sneakers 7}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://cdn.pixabay.com/photo/2016/11/18/22/29/footwear-1837170_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Sneakers 8`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Sneakers 8}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://cdn.pixabay.com/photo/2012/12/21/10/07/sneakers-71623_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Sneakers 9`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Sneakers 9}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://cdn.pixabay.com/photo/2020/07/15/18/26/footwear-5408643_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Sneakers 10`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Sneakers 10}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://cdn.pixabay.com/photo/2017/09/20/14/37/sneaker-2768760_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },

  {
    name: `T-Shirt 1`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a T-Shirt 1}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `T-Shirt 2`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a T-Shirt 2}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://cdn.pixabay.com/photo/2020/06/04/06/22/mockup-5257439_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `T-Shirt 3`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a T-Shirt 3}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://cdn.pixabay.com/photo/2020/06/04/06/21/mockup-5257433_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `T-Shirt 4`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a T-Shirt 4}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://cdn.pixabay.com/photo/2020/06/04/06/22/mockup-5257437_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `T-Shirt 5`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a T-Shirt 5}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://cdn.pixabay.com/photo/2020/06/04/06/23/mockup-5257442_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `T-Shirt 6`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a T-Shirt 6}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://cdn.pixabay.com/photo/2020/05/22/17/55/mockup-5206375_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `T-Shirt 7`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a T-Shirt 7}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://cdn.pixabay.com/photo/2020/05/22/17/54/mockup-5206367_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `T-Shirt 8`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a T-Shirt 8}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://cdn.pixabay.com/photo/2020/06/04/06/21/mockup-5257432_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `T-Shirt 9`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a T-Shirt 9}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://cdn.pixabay.com/photo/2020/06/04/06/22/mockup-5257434_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `T-Shirt 10`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a T-Shirt 10}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://cdn.pixabay.com/photo/2020/06/04/06/22/mockup-5257435_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },

  {
    name: `Pants 1`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Pants 1}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://cdn.pixabay.com/photo/2017/08/07/16/49/male-2605630_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Pants 2`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Pants 2}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://cdn.pixabay.com/photo/2018/10/10/14/23/pants-3737399_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Pants 3`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Pants 3}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://cdn.pixabay.com/photo/2018/10/10/14/25/pants-3737413_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Pants 4`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Pants 4}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://cdn.pixabay.com/photo/2018/10/10/14/23/pants-3737401_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Pants 5`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Pants 5}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://cdn.pixabay.com/photo/2017/08/14/22/08/pants-2642177_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Pants 6`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Pants 6}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://cdn.pixabay.com/photo/2018/10/10/14/24/pants-3737403_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Pants 7`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Pants 7}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://cdn.pixabay.com/photo/2018/10/03/17/38/jeans-3721980_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Pants 8`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Pants 8}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://cdn.pixabay.com/photo/2021/10/28/14/32/jeans-6749851_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Pants 9`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Pants 9}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://cdn.pixabay.com/photo/2015/03/30/14/12/jeans-699344_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Pants 10`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Pants 10}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://cdn.pixabay.com/photo/2020/01/20/06/47/jeans-4779617_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },

  {
    name: `Cap 1`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Cap 1}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://cdn.pixabay.com/photo/2017/05/23/20/50/caps-2338548_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Cap 2`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Cap 2}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://cdn.pixabay.com/photo/2018/01/23/00/36/hat-3100392_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Cap 3`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Cap 3}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://cdn.pixabay.com/photo/2010/12/13/10/30/bizarre-2846_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Cap 4`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Cap 4}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://cdn.pixabay.com/photo/2016/08/04/15/03/australia-1569232_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Cap 5`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Cap 5}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://cdn.pixabay.com/photo/2014/04/05/11/38/hat-316399_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Cap 6`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Cap 6}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://cdn.pixabay.com/photo/2016/01/24/23/16/hat-1159795_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Cap 7`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Cap 7}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://cdn.pixabay.com/photo/2018/06/26/13/07/hat-womens-3499381_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Cap 8`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Cap 8}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://cdn.pixabay.com/photo/2017/12/25/21/46/hat-3039194_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Cap 9`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Cap 9}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://cdn.pixabay.com/photo/2018/09/26/12/34/hat-womens-filcowy-3704503_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Cap 10`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Cap 10}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://cdn.pixabay.com/photo/2016/01/26/21/39/hats-1163299_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },

  {
    name: `Hoodie 1`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Hoodie 1}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://cdn.pixabay.com/photo/2022/02/23/08/55/hoodie-7030320_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Hoodie 2`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Hoodie 2}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://cdn.pixabay.com/photo/2022/04/20/13/14/man-7145190_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Hoodie 3`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Hoodie 3}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://cdn.pixabay.com/photo/2022/10/02/10/24/man-7493201_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Hoodie 4`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Hoodie 4}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://cdn.pixabay.com/photo/2022/01/27/16/32/man-6972530_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Hoodie 5`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Hoodie 5}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://cdn.pixabay.com/photo/2021/03/24/12/54/boy-6120029_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Hoodie 6`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Hoodie 6}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://cdn.pixabay.com/photo/2021/11/03/16/06/guy-6766175_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Hoodie 7`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Hoodie 7}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://cdn.pixabay.com/photo/2015/10/13/00/35/hoodie-985392_960_720.png`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Hoodie 8`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Hoodie 8}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://cdn.pixabay.com/photo/2020/05/05/18/06/hoody-5134300_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Hoodie 9`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Hoodie 9}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://cdn.pixabay.com/photo/2019/05/23/14/51/man-4224104_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Hoodie 10`,
    contents: `{"blocks":[{"key":"5avdh","text":"This is a Hoodie 10}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://cdn.pixabay.com/photo/2022/02/06/18/24/boxer-6997814_960_720.jpg`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
]

async function main() {
  await prisma.products.deleteMany({})

  for (const p of dummy) {
    const product = await prisma.products.create({
      data: p,
    })
    console.log(`Created id : ${product.id}`)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    // process.exit(1)
  })

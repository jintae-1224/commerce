// import ImageGallery from 'react-image-gallery'

import Head from 'next/head'
import Image from 'next/image'
import Carousel from 'nuka-carousel/lib/carousel'
import { useState } from 'react'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/106/1000/600/',
    thumbnail: 'https://picsum.photos/id/106/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1013/1000/600/',
    thumbnail: 'https://picsum.photos/id/1013/250/150/',
  },
  {
    original: 'https://picsum.photos/id/10/1000/600/',
    thumbnail: 'https://picsum.photos/id/10/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1012/1000/600/',
    thumbnail: 'https://picsum.photos/id/1012/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/188/1000/600/',
    thumbnail: 'https://picsum.photos/id/188/250/150/',
  },
  {
    original: 'https://picsum.photos/id/111/1000/600/',
    thumbnail: 'https://picsum.photos/id/111/250/150/',
  },
  {
    original: 'https://picsum.photos/id/122/1000/600/',
    thumbnail: 'https://picsum.photos/id/122/250/150/',
  },
]

export default function Products() {
  // return <ImageGallery items={images} />
  const [index, setIndex] = useState<number>(0)
  return (
    <>
      <Head>
        <meta
          property="og:url"
          content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="When Great Minds Don’t Think Alike"
        />
        <meta
          property="og:description"
          content="How much does culture influence creative thinking?"
        />
        <meta
          property="og:image"
          content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
        />
      </Head>
      <Carousel
        withoutControls
        wrapAround
        autoplay
        speed={10}
        slideIndex={index}
      >
        {images.map((item) => (
          <Image
            key={item.original}
            src={item.original}
            alt="image"
            width={1000}
            height={600}
            layout="responsive"
          />
        ))}
      </Carousel>
      <div style={{ display: 'flex' }}>
        {images.map((item, idx) => (
          <div key={idx} onClick={() => setIndex(idx)}>
            <Image
              key={item.original}
              src={item.original}
              alt="image"
              width={100}
              height={60}
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </>
  )
}

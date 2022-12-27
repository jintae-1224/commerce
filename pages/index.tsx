import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null)
  // const [products, setProducts] = useState<
  //   {
  //     id: string
  //     properties: { id: string }[]
  //   }[]
  // >([])
  const [products, setProducts] = useState<
    {
      id: string
      name: string
      createdAt: string
    }[]
  >([])

  // useEffect(() => {
  //   fetch('/api/get-items')
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.items))
  // }, [])

  useEffect(() => {
    fetch('/api/get-products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  }, [])

  console.log(products)

  const handleClick = () => {
    if (inputRef.current === null || inputRef.current.value === '') {
      alert('name을 넣어주세요')
      return
    }
    fetch(`/api/add-item?name=${inputRef.current.value}`)
      .then((res) => res.json())
      .then((data) => alert(data.message))
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <input
            className='"placeholder:italic placeholder:text-slate-400 block bg-white w-96 border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"'
            ref={inputRef}
            type="text"
            placeholder="name"
          />
          <button
            css={css`
              background-color: skyblue;
              padding: 16px;
              border-radius: 8px;
            `}
            onClick={handleClick}
          >
            Add Jacket
          </button>
          <div>
            <p>Product List</p>
            {/* {products &&
              products.map((item) => (
                <>
                  <div key={item.id}>{JSON.stringify(item)}</div>
                  {item.properties &&
                    Object.entries(item.properties).map(([key, value]) => (
                      <button
                        key={key}
                        onClick={() => {
                          fetch(
                            `/api/get-detail?pageId=${item.id}&propertyId=${value.id}`
                          )
                            .then((res) => res.json())
                            .then((data) => alert(JSON.stringify(data.detail)))
                        }}
                      >
                        {key}
                      </button>
                    ))}
                </>
              ))} */}
            {products &&
              products.map((item) => (
                <div key={item.id}>
                  {item.name}
                  <span>{item.createdAt}</span>
                </div>
              ))}
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}

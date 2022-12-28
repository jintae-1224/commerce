import CustomEditor from '@components/Editor'
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Carousel from 'nuka-carousel/lib/carousel'
import { useEffect, useState } from 'react'

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
  const router = useRouter()
  const { id: productId } = router.query
  const [editorState, setEditorState] = useState<EditorState | undefined>(
    undefined
  )

  useEffect(() => {
    if (productId != null) {
      fetch(`/api/get-product?id=${productId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.item.contents) {
            setEditorState(
              EditorState.createWithContent(
                convertFromRaw(JSON.parse(data.item.contents))
              )
            )
          } else {
            setEditorState(EditorState.createEmpty())
          }
        })
    }
  }, [productId])

  const handleSave = () => {
    if (editorState) {
      fetch(`/api/update-product`, {
        method: 'POST',
        body: JSON.stringify({
          id: productId,
          contents: JSON.stringify(
            convertToRaw(editorState.getCurrentContent())
          ),
        }),
      })
        .then((res) => res.json())
        .then((data) => alert('Success'))
    }
  }

  return (
    <>
      <div style={{ width: '500px' }}>
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
      </div>
      {editorState != null && (
        <CustomEditor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          onSave={handleSave}
        />
      )}
    </>
  )
}

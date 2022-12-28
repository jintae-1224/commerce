import { EditorProps } from 'react-draft-wysiwyg'
import dynamic from 'next/dynamic'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styled from '@emotion/styled'
import { EditorState } from 'draft-js'
import { Dispatch, SetStateAction } from 'react'
import Button from './Button'

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  {
    ssr: false,
  }
)

const Wrapper = styled.div`
  padding: 16px;
`

export default function CustomEditor({
  editorState,
  readOnly = false,
  onEditorStateChange,
  onSave,
}: {
  editorState: EditorState
  readOnly?: boolean
  onEditorStateChange?: Dispatch<SetStateAction<EditorState | undefined>>
  onSave?: () => void
}) {
  return (
    <Wrapper>
      <Editor
        readOnly={readOnly}
        editorState={editorState}
        toolbarHidden={readOnly}
        toolbarClassName="editorToolbar-hidden"
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          option: ['inline', 'list', 'textAlign', 'link'],
        }}
        localization={{
          local: 'ko',
        }}
      />
      {!readOnly && <Button onClick={onSave}>Save</Button>}
    </Wrapper>
  )
}

import React, { lazy, Suspense } from 'react'
// import 'react-quill/dist/quill.snow.css'
// import ReactQuill from 'react-quill'

const ReactQuill = lazy(() => import('react-quill'))

export default function Home() {
  return (
    <div>
      Home
      <Suspense fallback="loading ...">
        <ReactQuill />
      </Suspense>
    </div>
  )
}

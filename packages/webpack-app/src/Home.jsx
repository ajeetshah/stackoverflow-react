import React, { lazy, Suspense, useEffect, useRef } from 'react'
// import 'react-quill/dist/quill.snow.css'
// import ReactQuill from 'react-quill'

const ReactQuill = lazy(() => import('react-quill'))

export default function Home() {
  const ref = useRef()

  return (
    <div>
      Home
      <Suspense fallback="loading ...">
        <ReactQuill />}
      </Suspense>
    </div>
  )
}

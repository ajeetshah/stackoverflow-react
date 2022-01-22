import React, { lazy, Suspense } from 'react'
import Home from './Home.jsx'

// const Home = lazy(() => import('./Home.jsx'))

const App = () => {
  return (
    <>
      <div>Hello React and Webpack</div>
      <Suspense fallback="loading ...">
        <Home />
      </Suspense>
    </>
  )
}

export default App

import { lazy, Suspense } from 'react'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'

const n1 = './components/Comp1'
const n2 = './components/Comp2'

const Comp1Lazy = lazy(() => import(`${n1}`))
const Comp2Lazy = lazy(() => import(n2 + ''))

function App() {
  return (
    <div className="App">
      <Suspense fallback="loading ...">
        <Comp1 />
        <Comp2 />
        <Comp1Lazy />
        <Comp2Lazy />
      </Suspense>
    </div>
  )
}

export default App

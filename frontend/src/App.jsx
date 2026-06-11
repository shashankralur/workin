import { useState } from 'react'
import HomePage from './pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './cssFiles/main.css';
import './cssFiles/common.css';
import './cssFiles/fonts.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />
    </>
  )
}

export default App

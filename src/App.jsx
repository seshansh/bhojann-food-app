import React from 'react'
import './App.css'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Header />
      <main>
        <Meals />
      </main>
      {/* <Footer /> */}
    </React.Fragment>
  )
}

export default App

import './App.css'

import Navbar from './components/Navbar'
import Content from './components/Content'
import Header from './components/Header'
import Suggestion from './components/Suggestion'

import { Analytics } from '@vercel/analytics/react'

function App() {

  return (
    <>
      {/* <Content />
      <Suggestion />
      <Header />
      <Navbar /> */}
      
      <Analytics>
        <div className='daddy-div' >
          <Content />
          <Content />
          <Suggestion />
          <Content />
          <Content />
          <div  className='info'>
            <h1>made by tanmay</h1>
          </div>
        </div>
        <Header />
        <Navbar />
      </Analytics>
    </>
  )
}

export default App

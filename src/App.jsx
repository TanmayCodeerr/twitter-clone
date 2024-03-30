import './App.css'

import Navbar from './components/Navbar'
import Content from './components/Content'
import Header from './components/Header'
import Suggestion from './components/Suggestion'



function App() {

  return (
    <>
      {/* <Content />
      <Suggestion />
      <Header />
      <Navbar /> */}
      
      
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
      
    </>
  )
}

export default App

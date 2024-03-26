import {} from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Header/Blogs/Blogs'
import Bookmarks from './components/Header/Bookmarks/Bookmarks'

function App() {

  return (
    <>
     <Header />
     <div className='md:flex'>
     <Blogs />
     <Bookmarks />
     </div>
    </>
  )
}

export default App

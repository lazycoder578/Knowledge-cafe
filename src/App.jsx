import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Header/Blogs/Blogs'
import Bookmarks from './components/Header/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark =blog =>{
    console.log(blog);
  }

  return (
    <>
     <Header />
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleAddToBookmark = {handleAddToBookmark}/>
     <Bookmarks />
     </div>
    </>
  )
}

export default App

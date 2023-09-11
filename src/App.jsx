import React from 'react'
import Homepage from './components/view/Homepage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  return (
    <div className='bg-black relative z-[1000]'>
      <Homepage />
    </div>
  )
}

export default App
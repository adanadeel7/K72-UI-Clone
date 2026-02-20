import React from 'react'
import { Link } from 'react-router-dom'

function HomeBottomText() {
  return (
    <div className='text-white font-[font2] flex items-center justify-center gap-2 pb-2' >
        <Link to='/projects' className='hover:border-[#D3FD50] hover:text-[#D3FD50] text-[6.5vw] uppercase border-3 leading-[5.5vw] border-white rounded-full px-10 pt-3'>Projects</Link>
        <Link to='/agence' className='hover:border-[#D3FD50] hover:text-[#D3FD50] text-[6.5vw] uppercase border-3 leading-[5.5vw] border-white rounded-full px-10 pt-3'>Agence</Link>

    </div>
  )
}

export default HomeBottomText
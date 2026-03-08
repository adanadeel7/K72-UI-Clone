import React from 'react'

function ProjectsCard(props) {
  return (
    <div className='w-full flex gap-4 h-[400px] mb-4  -mt-10 '>
          <div className='w-1/2 h-full relative group transition-all rounded-none hover:rounded-[50px] overflow-hidden'>
            <img className='h-full w-full object-cover' src={props.image1} alt="" />
            <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 bg-black/50 h-full w-full flex items-center justify-center'>
              <h2 className='uppercase text-6xl font-[font1] border-2 rounded-full p-2 text-white border-white pt-3 px-4'> Vior le projets</h2>
            </div>
          </div>

          <div className='w-1/2 h-full relative group transition-all rounded-none hover:rounded-[50px] overflow-hidden'>
            <img className='h-full w-full object-cover' src= {props.image1} alt="" />
            <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 bg-black/50 h-full w-full flex items-center justify-center'>
              <h2 className='uppercase text-6xl font-[font1] border-2 rounded-full p-2 text-white border-white pt-3 px-4'> Vior le projets</h2>
            </div>
          </div>
        </div>
  )
}

export default ProjectsCard
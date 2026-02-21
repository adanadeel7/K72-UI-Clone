import React from 'react'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'


function Stairs(props) {
    const currentPath = useLocation().pathname
    
  const stairParentRef = useRef(null)
  const pageRef = useRef(null)

  const tl = gsap.timeline()
  useGSAP(function() { 
    tl.to(stairParentRef.current, {
            display: 'block',
        })
    
    
    tl.from(".stairs", { 
      height:0,
      stagger:{
        amount:-0.25,
      }

    
    })

    tl.to('.stairs', { 
        y:"100%",
        stagger:{
          amount:-0.25,
      }
       
    })
    
    tl.to(stairParentRef.current, { 
      display:'none',
    })

    tl.to('.stairs', { 
        y:"0%",
      })

      gsap.from(pageRef.current,{
        opacity:0,
        delay:1.2,
        scale:1.2,

      })
    
  },[currentPath])
  return (
    <div>
        <div className='h-screen w-full fixed top-0 z-20' ref={stairParentRef}>
            <div className='h-full w-full flex '>
            <div className='stairs h-full w-1/5 bg-black'></div>
            <div className='stairs h-full w-1/5 bg-black'></div>
            <div className='stairs h-full w-1/5 bg-black'></div>
            <div className='stairs h-full w-1/5 bg-black'></div>
            <div className='stairs h-full w-1/5 bg-black'></div>
            </div>
        </div>

        <div ref={pageRef}>
            {props.children}
        </div>
    </div>
    

  )
}

export default Stairs
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function FullScreenNav() {
  const containerRef = useRef(null)



  function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
  
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }


    

  return (
    <div ref={containerRef}  className="hidden text-white h-screen w-full fixed top-0 left-0 bg-black overflow-hidden z-[999]">
      <div className="h-screen w-full absolute top-0 left-0 z-0 pointer-events-none">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-[#0f0f0f] border-r border-white/5"></div>
          <div className="stairing h-full w-1/5 bg-[#0f0f0f] border-r border-white/5"></div>
          <div className="stairing h-full w-1/5 bg-[#0f0f0f] border-r border-white/5"></div>
          <div className="stairing h-full w-1/5 bg-[#0f0f0f] border-r border-white/5"></div>
          <div className="stairing h-full w-1/5 bg-[#0f0f0f]"></div>
        </div>
      </div>

      
      <div className="relative z-10 h-full w-full flex flex-col navlink">
        
        {/* Header/Nav Section */}
        <div className="p-10 flex w-full justify-between items-start">
          <div className="w-32">
            <svg
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          
          {/* Close Button */}
          <div className="h-16 w-16 relative flex items-center justify-center cursor-pointer group">
            <div className="absolute h-full w-0.5 bg-[#D3FD50] rotate-45 rounded-full"></div>
            <div className="absolute h-full w-0.5 bg-[#D3FD50] -rotate-45 rounded-full"></div>
          </div>
        </div>

        {/* Links Section */}
        <div className="all-links flex-grow flex flex-col justify-center top-0 pb-30">
          
          {/* Link Item: Projets */}
          <div className="link group relative border-y border-white/10 overflow-hidden cursor-pointer top-0"
          >
            <h1 className="font-[font2] text-[8vw] text-center relative leading-[1] uppercase group-hover:opacity-0 transition-opacity">
              Projets
            </h1>
            {/* Hover Content */}
            <div className="moveLink absolute top-0 left-0 w-full h-full flex items-center bg-[#D3FD50] text-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <div className="flex items-center gap-10 whitespace-nowrap animate-marquee">
                <h2 className="text-[8vw] font-[font2] uppercase">Pour Tout voir</h2>
                <img className="rounded-full h-20 w-40 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className="text-[8vw] font-[font2] uppercase">Pour Tout voir</h2>
              </div>
            </div>
          </div>

          {/* Link Item: Agence */}

          <div className="link group relative border-y border-white/10 overflow-hidden cursor-pointer top-0">
            <h1 className="font-[font2] text-[8vw] text-center relative leading-[1] uppercase group-hover:opacity-0 transition-opacity">
              Agence
            </h1>
            {/* Hover Content */}
            <div className="moveLink absolute top-0 left-0 w-full h-full flex items-center bg-[#D3FD50] text-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <div className="flex items-center gap-10 whitespace-nowrap animate-marquee">
                <h2 className="text-[8vw] font-[font2] uppercase">Pour Tout voir</h2>
                <img className="rounded-full h-20 w-40 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className="text-[8vw] font-[font2] uppercase">Pour Tout voir</h2>
              </div>
            </div>
          </div>
          

           <div className="link group relative border-y border-white/10 overflow-hidden cursor-pointer">
            <h1 className="font-[font2] text-[8vw] text-center relative leading-[1] py-2 uppercase group-hover:opacity-0 transition-opacity">
              Contact
            </h1>
            {/* Hover Content */}
            <div className="moveLink absolute top-0 left-0 w-full h-full flex items-center bg-[#D3FD50] text-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <div className="flex items-center gap-10 whitespace-nowrap animate-marquee">
                <h2 className="text-[8vw] font-[font2] uppercase">Pour Tout voir</h2>
                <img className="rounded-full h-20 w-40 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className="text-[8vw] font-[font2] uppercase">Pour Tout voir</h2>
              </div>
            </div>
          </div>

           <div className="link group relative border-y border-white/10 overflow-hidden cursor-pointer">
            <h1 className="font-[font2] text-[8vw] text-center relative leading-[1] py-2 uppercase group-hover:opacity-0 transition-opacity">
              Blogue
            </h1>
            {/* Hover Content */}
            <div className="moveLink absolute top-0 left-0 w-full h-full flex items-center bg-[#D3FD50] text-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <div className="flex items-center gap-10 whitespace-nowrap animate-marquee">
                <h2 className="text-[8vw] font-[font2] uppercase">Pour Tout voir</h2>
                <img className="rounded-full h-20 w-40 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className="text-[8vw] font-[font2] uppercase">Pour Tout voir</h2>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FullScreenNav
import React from 'react'
import ProjectsCard from '../components/projects/ProjectsCard'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

function Projects() {
  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]


gsap.registerPlugin(ScrollTrigger)
useGSAP(function() { 
  gsap.from('.hero',{
    height:'100px',
    stagger:{
      amount:0.4,
    },
    scrollTrigger:{
      trigger: '.lol',
      start:'top 100%',
      end: 'top -150%',
      scrub: true
    }
  })
})


  return (
    <div className='bg-white p-4'>
      <div className='pt-[45vh] '>
        <h2 className='font-[font2] text-[10vw] uppercase'> Projets </h2>
      </div>

      <div className='lol'>
        {projects.map(function (elem,idx) { 
          return <div key={idx} className="hero w-full flex gap-4 h-[400px] mb-13  -mt-10">
          <ProjectsCard image1={elem.image1} image2 = {elem.image2}/>
          </div>
        })}
        
      </div>

      

      

    </div>
  )
}

export default Projects
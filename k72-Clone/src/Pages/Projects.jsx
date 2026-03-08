import React from 'react'

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




  return (
    <div className='bg-white p-4'>
      <div className='pt-[45vh] '>
        <h2 className='font-[font2] text-[10vw] uppercase'> Projets </h2>
      </div>

      <div>
        <div className='w-full flex gap-4 h-[700px] mb-4 bg-amber-600 -mt-10'>
          <div className='w-1/2 h-full bg-green-900'></div>
          <div className='w-1/2 h-full bg-blue-900'></div>
        </div>
      </div>

      

      

    </div>
  )
}

export default Projects
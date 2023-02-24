import React, { useState } from 'react'
import "./style.scss"

/* add the rest */


function GalleryItem({src, category, subtitle, title, updateActiveImage, index}){
    return (
    <>

    {/* check this part  */}

    <div className='gallery-item-wrapper'>
        </div>
        <div className='gallery-item'>
            <div className='gallery-item-info'>
                <h1 className='gallery-info-title'>{title}</h1>
                <h6 className='gallery-info-subtitle'>{subtitle}</h6>
                <p className='gallery-info-category'>{category}</p>
            </div>
            <div className='gallery-item-image' style={{backgroundImage: `url(${src})`}}>
            </div>
       </div>
    </>

    )
}




export default function Gallery() {
    const [activeImage, setActiveImage] = useState(1);



  return (
    <>
    <section className='section-wrapper gallery-wrap'>
        <div className='gallery'>

            <div className='gallery-counter'>
                <span>{activeImage}</span>
                <span className='divider'/>
                <span>{images.length}</span>

            </div>
            {images.map((image, index)=>(
                <GalleryItem key={image.src}  index={index} {...image} updateActiveImage={(index) => setActiveImage(index + 1)}/>
            ))}
        </div>
    </section>
    
    </>
  )
}

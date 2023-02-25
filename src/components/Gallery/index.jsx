import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import cn from "classnames";
import "./style.scss"
import useOnScreen from '../../hooks/useOnScreen';

const images = [
    {
        src:"https://images.unsplash.com/photo-1676543440008-ebba1a1d9775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzI3MTg0OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        title:"DRACNE TRIFECZ",
        subtitle:"Live the Beauty",
        category: "advanced"
    },
    {
        src:"https://images.unsplash.com/photo-1676834173767-e77528eebbb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzI3NTA4NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        title:"DRACNE TRIFECZ",
        subtitle:"Live the Beauty",
        category: "advanced"
    },
    {
        src:"https://images.unsplash.com/photo-1676618836126-67e5beefa61f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzI3NTEzOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        title:"DRACNE TRIFECZ",
        subtitle:"Live the Beauty",
        category: "advanced"
    },
    {
        src:"https://images.unsplash.com/photo-1676194322346-464e1ceebff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzI3NTI0Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        title:"DRACNE TRIFECZ",
        subtitle:"Live the Beauty",
        category: "advanced"
    },
];

function GalleryItem({src, category, subtitle, title, updateActiveImage, index}) {
    const ref = useRef(null);
    const onScreen = useOnScreen(ref, 0.5);
    useEffect(() => {
        if (onScreen){
            updateActiveImage(index);
        }
    }, [onScreen, index])



    return (
        

    <div className={cn('gallery-item-wrapper', {"is-reveal":onScreen})}
    ref={ref}
    
    >
        <div />
        <div className='gallery-item'>
            <div className='gallery-item-info'>
                <h1 className='gallery-info-title'>{title}</h1>
                <h6 className='gallery-info-subtitle'>{subtitle}</h6>
                <p className='gallery-info-category'>{category}</p>
            </div>
            <div className='gallery-item-image' style={{backgroundImage: `url(${src})`}}>
            </div>
       </div>
       <div />
       </div>

    );
}

export default function Gallery() {
    const [activeImage, setActiveImage] = useState(1);
    const ref = useRef(null);

    useEffect(() => {
        setTimeout(()=>{
            const sections = gsap.utils.toArray('.gallery-item-wrapper');
        gsap.to(sections, {
            xPercent: -100 * (sections.length-1),
            ease:'none',
            scrollTrigger:{
                start: 'top top',
                trigger: ref.current,
                scroll: '#main-container',
                pin:true,
                scrub: 0.5,
                span: 1/(sections.length-1),
                end: ()=>`+=${ref.current.offsetWidth}`,
            },
        });
       /*  ScrollTrigger.refresh(); */
    })
    }, []);

        



        

  return (
    <>
    <section data-scroll-section className='section-wrapper gallery-wrap'>
        <div className='gallery' ref={ref}>

            <div className='gallery-counter'>
                <span>{activeImage}</span>
                <span className="divider" />
                <span>{images.length}</span>

            </div>
            {images.map((image, index)=>(
                <GalleryItem key={image.src}  index={index} {...image} updateActiveImage={index => setActiveImage(index + 1)}/>
            ))}
        </div>
    </section>
    
    </>
  )
}

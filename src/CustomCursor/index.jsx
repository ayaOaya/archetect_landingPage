import React from 'react'
import './style.scss'

export default function CustomCursor() {
    const cursrorRef = React.useRef(null)

    React.useEffect(() =>{
        document.addEventListener('mousemove', (event)=>{
            const {clientX , clientY} = event;
            const mouseX = clientX - cursrorRef.current.clientWidth/2;
            const mouseY = clientY - cursrorRef.current.clientHeight/2;
            cursrorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

        });
    }, [])
  return (
    <div className='app-cursor' ref={cursrorRef} >

    </div>
  )
}

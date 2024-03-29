import React, {useEffect, useRef, useState} from 'react'
import SectionHeader from '../SectionHeader'
import gsap from 'gsap';
import SplitText from "../../utils/Split3.min.js"
import cn from "classnames";
import "./style.scss"
import useOnScreen from '../../hooks/useOnScreen';

export default function About() {
  const ref = useRef();

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);
  useEffect(()=>{
    if (onScreen) setReveal(onScreen);

  }, [onScreen]);

  useEffect(() => {
    if(reveal){
    const split = new SplitText("#headline", {
      type: "lines",
    });

    gsap.to(split.lines, {
      duration:1,
      y:-20,
      opacity:1,
      stagger:0.1,
      ease: "power2",
    });
  }
  }, [reveal]);

  return (
    <section className={cn("about-section")}
    data-scroll-section>
      <SectionHeader title='about'/>
      <p ref={ref} id='headline' className={cn({'is-reveal': reveal})}>
        Flirty flowers is a blog about flowers and the floral designers who make them into art. Creativity and the art of 'making' require self presence the full purpose of the Flirty flowers blog is to encourage and inspireWe value art we value insight and we value opinion.
      </p>

    </section>
  )
}

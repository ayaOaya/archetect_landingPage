import React from 'react';
import "./style.scss";
import photos from '../../data';


export default function Featured() {
  const [firstUrl, secondUrl] = photos;
  return (
    <section className='featured-section'>

      <div className='featured-row-layout'>
        <h6>green</h6>
        <img src={firstUrl} alt="archetecture"></img>
      </div>
      <div className='featured-column-layout'>
        <h6>lily</h6>
        <img src={secondUrl} alt="archetecture"></img>
      </div>
    </section>
  )
}


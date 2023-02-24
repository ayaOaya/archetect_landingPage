import React from 'react'
import SectionHeader from '../SectionHeader'
import "./style.scss"

export default function About() {
  return (
    <section className={"about-section"}>
      <SectionHeader title='about'/>
      <p id='headline'>
        Flirty flowers is a blog about flowers and the floral designers who make them into art. Creativity and the art of 'making' require self presence the full purpose of the Flirty flowers blog is to encourage and inspireWe value art we value insight and we value opinion.
      </p>

    </section>
  )
}

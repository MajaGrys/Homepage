import { Slide } from "react-awesome-reveal";

export default function About() {
    return (
        <section id="about" className="one dark cover">
        <div className="container">

          <header>
          <Slide duration={3000} triggerOnce={true}>
            <h2>Hello</h2>
          </Slide>
          </header>

          <Slide delay={1000} duration={4000} triggerOnce={true} direction='right'>
          <p>I'm Maja, I create websites.</p>
          </Slide>

        </div>
      </section>
    )
}
import { Slide } from "react-awesome-reveal";

export default function Skills() {
    return (
        <section id="skills" className="three">
        <div className="container">
          <header>
            <Slide delay={1000} duration={2000} triggerOnce={true}>
            <h2>Skills</h2>
            </Slide>
          </header>
        <p>HTML CSS JavaScript React TypeScript Git Responsive design</p>
        </div>
      </section>
    )
}
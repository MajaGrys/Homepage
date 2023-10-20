import { Slide, Bounce } from "react-awesome-reveal";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";

export default function Skills() {
    return (
        <section id="skills" className="three">
        <div className="container">
          <header>
            <Slide duration={2000} triggerOnce>
            <h2>Skills</h2>
            </Slide>
          </header>
          <span id='skillsList'>
            <Bounce cascade damping={0.3}>
            <ul>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> HTML5</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> CSS3</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> Bootstrap</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> Responsive web design</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> Git</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> JavaScript ES6</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> REST API</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> React</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> Redux</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> TypeScript</li>
            </ul>
            </Bounce>
          </span>

        </div>
      </section>
    )
}
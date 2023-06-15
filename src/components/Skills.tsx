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
            <Bounce cascade damping={0.1}> {/* triggerOnce */}
            <span><Icon as={CheckCircleIcon} color='purple.400' /> HTML</span>
            <span><Icon as={CheckCircleIcon} color='purple.400' />CSS</span>
            <span><Icon as={CheckCircleIcon} color='purple.400' />JavaScript</span>
            <span><Icon as={CheckCircleIcon} color='purple.400' />React</span>
            <span><Icon as={CheckCircleIcon} color='purple.400' />TypeScript</span>
            <span><Icon as={CheckCircleIcon} color='purple.400' />Git</span>
            <span><Icon as={CheckCircleIcon} color='purple.400' />Responsive design</span>
            </Bounce>
          </span>

        </div>
      </section>
    )
}
import { Slide, Bounce } from "react-awesome-reveal";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";

export default function Skills() {
    return (
        <section id="skills" className="three">
        <div className="container">
          <header>
            <Slide duration={2000}>
            <h2>Skills</h2>
            </Slide>
          </header>
          
            <Icon as={CheckCircleIcon} color='purple.400' />
            <Bounce cascade damping={0.1} triggerOnce> HTML CSS JavaScript React TypeScript Git Responsive design</Bounce>

        </div>
      </section>
    )
}
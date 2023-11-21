import { Bounce } from "react-awesome-reveal";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import '../assets/css/Skills.scss';

export default function Skills() {
    return (
        <section id="skills">
          <h2>Skills</h2>
          <p id='skillsList'>
            <Bounce cascade damping={0.3} triggerOnce={true}>
            <ul>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> HTML5</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> CSS3</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> Bootstrap</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> Responsive web design</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> Git</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> JavaScript ES6</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> REST API</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> React</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> React Router</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> Redux</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> TypeScript</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> Jest</li>
              <li><Icon as={CheckCircleIcon} color='purple.400' /> Cypress</li>
            </ul>
            </Bounce>
          </p>
      </section>
    )
}
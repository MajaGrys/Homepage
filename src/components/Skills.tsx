import { Bounce } from "react-awesome-reveal";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import '../assets/css/Skills.scss';

export default function Skills() {
    const skills = [
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Responsive web design',
      'Git',
      'JavaScript ES6',
      'REST API',
      'React',
      'React Router',
      'Redux',
      'npm',
      'TypeScript',
      'Jest',
      'Cypress',
      'Agile',
      'Scrum'
    ]

    return (
        <section id="skills">
          <h2>Skills</h2>
          <p id='skillsList'>
            <Bounce cascade damping={0.3} triggerOnce={true}>
            <ul>
              {
                skills.map(skill => {
                  return <li><Icon as={CheckCircleIcon} color='purple.400' /> {skill}</li>
                })
              }
            </ul>
            </Bounce>
          </p>
      </section>
    )
}
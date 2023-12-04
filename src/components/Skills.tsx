import { Bounce } from "react-awesome-reveal";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Card, CardBody, Icon } from "@chakra-ui/react";
import '../assets/css/Skills.scss';

export default function Skills() {
    const frontend = [
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Responsive web design',
      'JavaScript ES6',
      'REST API',
      'React',
      'React Router',
      'Redux',
      'npm',
      'TypeScript'
    ]

    const testing = [
      'Jest',
      'Cypress'
    ]

    const devops = [
      'Git',
      'Agile',
      'Scrum',
      'Docker'
    ]

    return (
        <section id="skills">
          <h2>Skills</h2>
          <p id='skillsList'>
            <Bounce cascade damping={0.5} triggerOnce={true}>

            <Card className="skillsSection">
              <CardBody> <h3>Frontend</h3>
                <ul>
                  {
                    frontend.map(skill => {
                      return <li><Icon as={CheckCircleIcon} color='purple.400' /> {skill}</li>
                    })
                  }
                </ul>
              </CardBody>
            </Card>

            <Card className="skillsSection">
              <CardBody> <h3>Testing</h3>
                <ul>
                  {
                    testing.map(skill => {
                      return <li><Icon as={CheckCircleIcon} color='purple.400' /> {skill}</li>
                    })
                  }
                </ul>
              </CardBody>
            </Card>

            <Card className="skillsSection">
              <CardBody> <h3>DevOps</h3>
                <ul>
                  {
                    devops.map(skill => {
                      return <li><Icon as={CheckCircleIcon} color='purple.400' /> {skill}</li>
                    })
                  }
                </ul>
              </CardBody>
            </Card>

            </Bounce>
          </p>
      </section>
    )
}
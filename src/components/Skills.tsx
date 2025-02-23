import { Bounce } from "react-awesome-reveal";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Card, CardBody, Icon } from "@chakra-ui/react";
import '../assets/css/Skills.scss';

const SkillsCard = (props: { name: string, group: string[] }) => {
  return (
    <Card className="skillsSection">
      <CardBody> <h3>{props.name}</h3>
        <ul>
          {
            props.group.map(skill => {
              return <li><Icon as={CheckCircleIcon} color='purple.400' /> {skill}</li>
            })
          }
        </ul>
      </CardBody>
    </Card>
  )
}

export default function Skills() {
    const frontend = [
      'HTML',
      'CSS',
      'SASS',
      'Bootstrap',
      'Responsive web design',
      'JavaScript',
      'REST API',
      'React',
      'React Router',
      'Redux',
      'Vue',
      'npm',
      'TypeScript',
      'SEO'
    ]

    const backend = [
      'Node',
      'Express',
      'NestJS',
      'SQL',
      'MongoDB',
      'GraphQL'
    ]

    const testing = [
      'unit testing',
      'E2E testing',
      'Jest',
      'Cypress',
      'Postman',
      'WCAG'
    ]

    const devops = [
      'Git',
      'Agile',
      'Scrum',
      'Docker',
    ]

    return (
      <section id="skills">
        <h2>Skills</h2>
        <p id='skillsList'>
          <Bounce cascade damping={0.5} triggerOnce={true}>
            <SkillsCard name='Frontend' group={frontend} />
            <SkillsCard name='Backend' group={backend} />
            <SkillsCard name='Testing' group={testing} />
            <SkillsCard name='DevOps' group={devops} />
          </Bounce>
        </p>
      </section>
    )
}
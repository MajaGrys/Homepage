import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { IoIosArrowDropright } from "react-icons/io";
import '../assets/css/Projects.scss';
import { ProjectModal } from './ProjectsModal';
import { ProjectsItems } from './ProjectsItems';

export default function Projects() {
    return (
      <section id="projects">
        <h2>Projects</h2>

        <Carousel responsive={{ desktop: { breakpoint: { max: 4000, min: 0 }, items: 1 }}}>
          {ProjectsItems.map(project => {
            return (
            <div className='projects-items' key={project.name}>
              <img src={project.img} alt='' />
              <div className='projects-buttons'>
                <ProjectModal key={project.name} project={project} />
                <a href={project.url} className='btn live-demo' target='_blank' rel="noreferrer" >Live demo <IoIosArrowDropright size='30px' /></a>
              </div>
            </div>
            )
          })}
        </Carousel>
      </section>            
    )
}
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaEye, FaCode } from "react-icons/fa6";
import '../assets/css/Projects.scss';
import { ProjectModal } from './ProjectsModal';
import { ProjectsItems } from './ProjectsItems';

export default function Projects() {
    return (
      <section id="projects">
        <h2>Projects</h2>
        <div className='mobile-instructions'>Swipe left and right to see more projects.</div>

        <Carousel
          responsive={{ desktop: { breakpoint: { max: 4000, min: 0 }, items: 1 }}}
          showDots
          dotListClass="carousel-dots"
          >

          {ProjectsItems.map(project => {
            return (
            <div className='projects-items' key={project.name}>
              <img src={project.img} alt='' />
              <div className='projects-buttons'>
                <ProjectModal key={project.name} project={project} />
                <a href={project.url} className='btn live-demo' target='_blank' rel="noreferrer" >Demo <FaEye size='26px' /></a>
                <a href={project.github} className='btn source-code' target="_blank" rel="noreferrer">Source <FaCode size='26px' /></a>
              </div>
            </div>
            )

          })}
        </Carousel>
      </section>            
    )
}
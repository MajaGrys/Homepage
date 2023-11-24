import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../assets/css/Projects.scss';
import EventFinderImg from '../assets/images/EventFinderImg.png';
import PortfolioImg from '../assets/images/PortfolioImg.png';
import SearchOnceImg from '../assets/images/SearchOnceImg.png';
import RandomFactsImg from '../assets/images/RandomFactsImg.png';
import VanGoghImg from '../assets/images/VanGoghImg.png';

export default function Projects() {
    const projects = [
      { name: 'EventFinder', img: EventFinderImg, url: 'https://majagrys.github.io/Event-Finder/', description: 'one' },
      { name: 'Portfolio', img: PortfolioImg, url: 'https://majagrys.github.io/Portfolio/', description: 'two' },
      { name: 'SearchOnce', img: SearchOnceImg, url: 'https://nlp-ug-2021-22.github.io/KreatywniInaczej-Project/', description: 'three' },
      { name: 'RandomFacts', img: RandomFactsImg, url: 'https://majagrys.github.io/Random-Facts/', description: 'four' },
      { name: 'Van Gogh Gallery', img: VanGoghImg, url: 'https://majagrys.github.io/Van-Gogh-Gallery/', description: 'five' }
    ]

    return (
      <section id="projects">
        <h2>Projects</h2>

        <Carousel responsive={{ desktop: { breakpoint: { max: 4000, min: 0 }, items: 1 }}}>
          {projects.map(project => {
            return (
            <div className='projects-items'>
              <img src={project.img} alt='' />
              <div className='projects-buttons'>
                {/* <button className='btn'>Description</button> */}
                <a href={project.url} className='btn live-demo' target='_blank' rel="noreferrer" >Live demo</a>
              </div>
            </div>
            )
          })}
        </Carousel>
        

        {/* 
            <Tab as='span' color='gray.700' _hover={{bg: 'purple.400', cursor: 'pointer', color: 'white'}} _selected={{ color: 'white', bg: 'purple.700' }}>EventFinder</Tab>
          
          <TabPanels>
          <TabPanel className='tabPanel'>
              <p>EventFinder is a React app that uses Ticketmaster Discovery API to allow users to search for events in the chosen city. A Bootstrap template was adapted into React. Redux was used for state management.</p>
              
              <ModalImage
                small={EF_small}
                large={EF}
                alt="This is my portfolio website created in React."
                hideDownload={true}
                hideZoom={true}
              />
              <p>Used: React, Redux, Axios, Bootstrap, <a href='https://developer.ticketmaster.com/products-and-docs/apis/getting-started/' target="_blank">Discovery API</a>, <a href='https://www.npmjs.com/package/react-loader-spinner' target="_blank">react-loader-spinner</a>, <a href='https://www.npmjs.com/package/react-notifications' target="_blank">react-notifications</a></p>
              <p>Deployed at <a href='https://majagrys.github.io/Event-Finder/' target="_blank">GitHub</a>.</p>
            </TabPanel>

          <TabPanel className='tabPanel'>
              <p>This website was created during a 2-week internship in collaboration with my mentor. During the development of this project I had the opportunity to get familiar with React, Typescript, npm and Chakra UI. An HTML5UP template was adapted into a React app and Web3Forms was implemented to handle the contact form backend.</p>
              
              <ModalImage
                small={Portfolio_small}
                large={Portfolio}
                alt="Portfolio website created in React."
                hideDownload={true}
                hideZoom={true}
              />
              <p>Used: React, TypeScript, <a href='https://chakra-ui.com/' target="_blank">Chakra UI</a>, <a href='https://html5up.net/' target="_blank">HTML5UP</a>, <a href='https://www.npmjs.com/package/react-awesome-reveal' target="_blank">React Awesome Reveal</a>, <a href='https://www.npmjs.com/package/react-modal-image' target="_blank">react-modal-image</a>, <a href='https://web3forms.com/' target="_blank">Web3Forms</a>, <a href='https://openai.com/blog/openai-api' target="_blank">OpenAI API</a></p>
            </TabPanel>

            <TabPanel className='tabPanel'>
              <p>Search<span style={{color: 'darkorange'}}>O</span>nce is a group project that combines APIs of three dictionaries into a single word search application. Bootstrap was used to style the components, dark mode was added using JavaScript. The collaboration was executed using Git, SCRUM and kanban.</p>
              <ModalImage
                small={SO_small}
                large={SO}
                alt="SearchOnce allows users to search for word definitions in 3 dictionaries."
                hideDownload={true}
                hideZoom={true}
              />
              <p>Used: HTML, CSS, JavaScript, <a href='https://bootswatch.com/flatly/' target="_blank">Bootstrap</a>, <a href='https://dictionaryapi.com/' target="_blank">Merriam-Webster Dictionary API</a>, <a href='https://www.mediawiki.org/wiki/API:Main_page' target="_blank">Wiktionary API</a>, <a href='https://rapidapi.com/community/api/urban-dictionary' target="_blank">Urban Dictionary API</a></p>
              <p>Deployed at <a href='https://nlp-ug-2021-22.github.io/KreatywniInaczej-Project/' target="_blank">GitHub</a>.</p>
            </TabPanel>

            <TabPanel className='tabPanel'>
              <p> A simple website that uses 4 different APIs to provide random facts. The text and buttons slide in on load. Images change opacity on hover to indicate interactivity.</p>

              <ModalImage
                small={RF_small}
                large={RF}
                alt="Users can choose 4 categories of facts."
                hideDownload={true}
                hideZoom={true}
              />
              <p>Used: HTML, CSS, JavaScript, <a href='https://dogapi.dog/' target="_blank">Dog API</a>, <a href='https://github.com/wh-iterabb-it/meowfacts' target="_blank">MeowFacts API</a>, <a href='http://numbersapi.com/' target="_blank">Numbers API</a>, <a href='https://uselessfacts.jsph.pl/' target="_blank">Useless Facts API</a></p>
              <p>Deployed at <a href='https://majagrys.github.io/Random-Facts/' target="_blank">GitHub</a>.</p>
            </TabPanel>

            <TabPanel className='tabPanel'>
              <p>VanGogh's Gallery is the first web development project I have completed. It's a website dedicated to the famous Dutch painter - Vincent Van Gogh. Flexbox was used in the paintings section to present Van Gogh's works. Titles and dates appear on hover.</p>

              <ModalImage
                small={VG_small}
                large={VG}
                alt="VanGogh's Gallery presents the life and work of the famous Dutch painter Vincent Van Gogh."
                hideDownload={true}
                hideZoom={true}
              />
              <p>Used: HTML, CSS, JavaScript</p>
              <p>Deployed at <a href='https://majagrys.github.io/Web-Development-Project/' target="_blank">GitHub</a>.</p>
            </TabPanel>

          </TabPanels>
        </Tabs> */}
      </section>            
    )
}
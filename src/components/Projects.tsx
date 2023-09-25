import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Slide } from "react-awesome-reveal";
import ModalImage from 'react-modal-image';
import LazyLoadWrapper from '../components/LazyLoadWrapper';
import SO from '../assets/images/searchOnce.png';
import SO_small from '../assets/images/searchOnce_small.png';
import VG from '../assets/images/vanGogh.png';
import VG_small from '../assets/images/vanGogh_small.png';
import RF from '../assets/images/randomFacts.png';
import RF_small from '../assets/images/randomFacts_small.png';

export default function Projects() {
    return (
      <>
      <section id="projects" className="two">
        <div className="container">

          <header>
            <Slide duration={2000} triggerOnce>
            <h2>Projects</h2>
            </Slide>
          </header>

          <p>I have participated in a number of web development projects, including:</p>

          <Tabs isFitted variant='unstyled' align='center'>
            <TabList>
              <Tab _selected={{ color: 'white', bg: 'purple.300' }} color='gray.500' as='span' _hover={{bg: 'purple.200', cursor: 'pointer'}} fontSize={20}>SearchOnce</Tab>
              <Tab _selected={{ color: 'white', bg: 'purple.300' }} color='gray.500' as='span' _hover={{bg: 'purple.200', cursor: 'pointer'}} fontSize={20}>Random Facts</Tab>
              <Tab _selected={{ color: 'white', bg: 'purple.300' }} color='gray.500' as='span' _hover={{bg: 'purple.200', cursor: 'pointer'}} fontSize={20}>Van Gogh's Gallery</Tab>
              <Tab _selected={{ color: 'white', bg: 'purple.300' }} color='gray.500' as='span' _hover={{bg: 'purple.200', cursor: 'pointer'}} fontSize={20}>Portfolio website</Tab>
            </TabList>

            <TabPanels>

              <TabPanel className='tabPanel'>
                <p>Search<span style={{color: 'darkorange'}}>O</span>nce is a group project that uses APIs of 3 dictionaries to gather a variety of word definitions in one place. The website is responsive, navigation changes to hamburger menu on mobile devices. Dark mode is also available.</p>
                <LazyLoadWrapper>
                <ModalImage
                  small={SO_small}
                  large={SO}
                  alt="SearchOnce allows users to search for word definitions in 3 dictionaries."
                  hideDownload={true}
                  hideZoom={true}
                />
                </LazyLoadWrapper>
                <p>Used: HTML, CSS, JavaScript, <a href='https://bootswatch.com/flatly/' target="_blank">Bootstrap</a>, <a href='https://dictionaryapi.com/' target="_blank">Merriam-Webster Dictionary API</a>, <a href='https://www.mediawiki.org/wiki/API:Main_page' target="_blank">Wiktionary API</a>, <a href='https://rapidapi.com/community/api/urban-dictionary' target="_blank">Urban Dictionary API</a></p>
                <p>Deployed at <a href='https://nlp-ug-2021-22.github.io/KreatywniInaczej-Project/' target="_blank">GitHub</a>.</p>
              </TabPanel>

              <TabPanel className='tabPanel'>
                <p> A simple website that uses 4 different APIs to provide random facts. The text and buttons slide in on load. Images change opacity on hover to indicate interactivity.</p>
                <LazyLoadWrapper>
                <ModalImage
                  small={RF_small}
                  large={RF}
                  alt="Users can choose 4 categories of facts."
                  hideDownload={true}
                  hideZoom={true}
                />
                </LazyLoadWrapper>
                <p>Used: HTML, CSS, JavaScript, <a href='https://dogapi.dog/' target="_blank">Dog API</a>, <a href='https://github.com/wh-iterabb-it/meowfacts' target="_blank">MeowFacts API</a>, <a href='http://numbersapi.com/' target="_blank">Numbers API</a>, <a href='https://uselessfacts.jsph.pl/' target="_blank">Useless Facts API</a></p>
                <p>Deployed at <a href='#' target="_blank">GitHub</a>.</p>
              </TabPanel>

              <TabPanel className='tabPanel'>
                <p>VanGogh's Gallery is the first web development project I have completed. It's a website dedicated to the famous Dutch painter - Vincent Van Gogh. Flexbox was used in the paintings section to present Van Gogh's works. Titles and dates appear on hover.</p>
                <LazyLoadWrapper>
                <ModalImage
                  small={VG_small}
                  large={VG}
                  alt="VanGogh's Gallery presents the life and work of the famous Dutch painter Vincent Van Gogh."
                  hideDownload={true}
                  hideZoom={true}
                />
                </LazyLoadWrapper>
                <p>Used: HTML, CSS, JavaScript</p>
                <p>Deployed at <a href='https://majagrys.github.io/Web-Development-Project/' target="_blank">GitHub</a>.</p>
              </TabPanel>

              <TabPanel className='tabPanel'>
                <p>This website was created during 2-week internship. It's my first React project. Contact form backend is handled by  Web3Forms. ChatGPT and LazyLoadWrapper were implemented with the aid of my mentor. </p>
                <p>Used: HTML, CSS, JavaScript, React, TypeScript, <a href='https://chakra-ui.com/' target="_blank">Chakra UI</a>, <a href='https://html5up.net/' target="_blank">HTML5UP</a>, <a href='https://web3forms.com/' target="_blank">Web3Forms</a>, <a href='https://openai.com/blog/openai-api' target="_blank">OpenAI API</a></p>
              </TabPanel>

            </TabPanels>
          </Tabs>
        </div>
      </section>
      </>

            
    )
}
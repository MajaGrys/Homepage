import EventFinderImg from '../assets/images/EventFinderImg.png';
import PortfolioImg from '../assets/images/PortfolioImg.png';
import SearchOnceImg from '../assets/images/SearchOnceImg.png';
import RandomFactsImg from '../assets/images/RandomFactsImg.png';
import VanGoghImg from '../assets/images/VanGoghImg.png';
import { Badge, Tooltip } from '@chakra-ui/react'

export interface ProjectsProps {
    name: string,
    img: string,
    url: string,
    github: string,
    description?: React.JSX.Element
}

const EventFinder = () => {
    return (
    <div className='project-description'>
        <p>A React app that allows users to search for interesting events in the vicinity of the chosen city. The search may be narrowed using a keyword, a date and a category. In addition, the results can be sorted. When no events with the selected options are found, an error message is displayed. Users may use a map to check if EventFinder is available in their area.</p>
        <p className='project-badges'>
            <Badge colorScheme='purple'>React</Badge>
            <Badge colorScheme='purple'>Redux</Badge>
            <Badge colorScheme='purple'>Bootstrap</Badge>
            <Badge colorScheme='purple'>Responsive</Badge>
            <Badge colorScheme='purple'>Axios</Badge>
            <Badge colorScheme='purple'>REST API</Badge>
            <Badge colorScheme='purple'><a href='https://developer.ticketmaster.com/products-and-docs/apis/getting-started/' target="_blank" rel="noreferrer">Discovery API</a></Badge>
            <Badge colorScheme='purple'><Tooltip label='react-loader-spinner and react-zoom-pan-pinch' bg='purple.400' hasArrow>npm packages</Tooltip></Badge>
            <Badge colorScheme='purple'>Jest</Badge>
            <Badge colorScheme='purple'>Cypress</Badge>
        </p>
    </div>
    )
}

const Portfolio = () => {
    return (
        <div className='project-description'>
            <p>This website has been created during a 2-week internship in collaboration with my mentor. It was a valuable experience because during the development of this project I used React, Typescript and npm for the first time. The website itself presents my skills and the projects I have completed. In addition, a contact form may be used to send me a message. We implemented a chatbot using OpenAI API as well, however, it no longer works due to the end of the API's free period.</p>
            <p className='project-badges'>
                <Badge colorScheme='purple'>React</Badge>
                <Badge colorScheme='purple'>React Router</Badge>
                <Badge colorScheme='purple'>Typescript</Badge>
                <Badge colorScheme='purple'><a href='https://chakra-ui.com/' target="_blank">Chakra UI</a></Badge>
                <Badge colorScheme='purple'>Responsive</Badge>
                <Badge colorScheme='purple'><Tooltip label='react-awesome-reveal and react-multi-carousel' bg='purple.400' hasArrow>npm packages</Tooltip></Badge>
                <Badge colorScheme='purple'><a href='https://web3forms.com/' target="_blank" rel="noreferrer">Web3Forms</a></Badge>
                <Badge colorScheme='purple'>REST API</Badge>
                <Badge colorScheme='purple'><a href='https://openai.com/blog/openai-api' target="_blank" rel="noreferrer">OpenAI API</a></Badge>
                <Badge colorScheme='purple'>Git</Badge>
            </p>
        </div>
    )
}

const SearchOnce = () => {
    return (
        <div className='project-description'>
            <p>SearchOnce is a group project that has been completed during a web development course. It combines APIs of three dictionaries into a single word search application. In addition, dark mode is available. We applied agile methodologies such as scrum and kanban to organize our cooperation and git to manage the code of our application.</p>
            <p className='project-badges'>
                <Badge colorScheme='purple'>Javascript</Badge>
                <Badge colorScheme='purple'><a href='https://bootswatch.com/flatly/' target="_blank" rel="noreferrer">Bootstrap</a></Badge>
                <Badge colorScheme='purple'>Responsive</Badge>
                <Badge colorScheme='purple'>REST API</Badge>
                <Badge colorScheme='purple'><a href='https://dictionaryapi.com/' target="_blank" rel="noreferrer">Merriam-Webster Dictionary API</a></Badge>
                <Badge colorScheme='purple'><a href='https://www.mediawiki.org/wiki/API:Main_page' target="_blank" rel="noreferrer">Wiktionary API</a></Badge>
                <Badge colorScheme='purple'><a href='https://rapidapi.com/community/api/urban-dictionary' target="_blank" rel="noreferrer">Urban Dictionary API</a></Badge>
                <Badge colorScheme='purple'>Agile</Badge>
                <Badge colorScheme='purple'>Scrum</Badge>
                <Badge colorScheme='purple'>Kanban</Badge>
                <Badge colorScheme='purple'>Git</Badge>
            </p>
        </div>
    )
}

const RandomFacts = () => {
    return (
        <div className='project-description'>
            <p>Coming soon...</p>
            <p className='project-badges'>
            </p>
        </div>
    )
}

const VanGoghGallery = () => {
    return (
        <div className='project-description'>
            <p>Coming soon...</p>
            <p className='project-badges'>
                <Badge colorScheme='purple'>.</Badge>
            </p>
        </div>
    )
}

export const ProjectsItems:Array<ProjectsProps> = [
    { 
        name: 'EventFinder',
        img: EventFinderImg,
        url: 'https://majagrys.github.io/Event-Finder/',
        github: 'https://github.com/MajaGrys/Event-Finder',
        description: <EventFinder />
    },
    { 
        name: 'Portfolio',
        img: PortfolioImg,
        url: 'https://majagrys.github.io/Portfolio/',
        github: 'https://github.com/MajaGrys/Portfolio',
        description: <Portfolio />
    },
    { 
        name: 'SearchOnce',
        img: SearchOnceImg,
        url: 'https://nlp-ug-2021-22.github.io/KreatywniInaczej-Project/',
        github: 'https://github.com/NLP-UG-2021-22/KreatywniInaczej-Project',
        description: <SearchOnce />
    },
    { 
        name: 'RandomFacts',
        img: RandomFactsImg,
        url: 'https://majagrys.github.io/Random-Facts/',
        github: 'https://github.com/MajaGrys/Random-Facts',
        description: <RandomFacts />
    },
    { 
        name: 'Van Gogh Gallery',
        img: VanGoghImg,
        url: 'https://majagrys.github.io/Van-Gogh-Gallery/',
        github: 'https://github.com/MajaGrys/Van-Gogh-Gallery',
        description: <VanGoghGallery />
    }
]





/* 
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
</Tabs> */
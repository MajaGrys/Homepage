import React, { Suspense } from 'react';
import { Progress } from '@chakra-ui/react';
import Sidebar, { SidebarContent } from './components/Sidebar';
import About from './components/About';
import './assets/css/main.css';
import './assets/css/App.scss';

const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));
const ChatGPT = React.lazy(() => import('./components/ChatGPT'));

export default function App() {
  return (
  <Suspense fallback={<Progress size='md' colorScheme='purple' isIndeterminate />}>
    <div id='sidebarContent'><SidebarContent /></div>
    <Sidebar />

    <div id="main">
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ChatGPT />
    </div>

    <div id="footer">
      <ul className="copyright">
        <li>&copy; All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </div>
  </Suspense>
  )
}
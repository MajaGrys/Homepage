import React from 'react';
import { Suspense, lazy } from 'react';
import Sidebar, { SidebarContent } from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Data from './components/Data';
import './assets/css/main.css';
import './App.scss';

export default function App() {
  const Contact = React.lazy(() => import('./components/Contact'));

  return (
    <>
    <div id='sidebar'><SidebarContent /></div>
    <Sidebar />
    <div id="main">
    <About />
    <Skills />
    <Projects />
    <Suspense fallback={<div>Loading...</div>}>
      <Contact />
    </Suspense>
    {/* <Data /> */}
    </div>

    <div id="footer">
      <ul className="copyright">
        <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </div>
  </>
  )
}
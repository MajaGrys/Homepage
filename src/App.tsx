import React from 'react';
import { Suspense, lazy } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Contact from './components/Contact';
import './assets/css/main.css';
import './App.scss';
// import './assets/sass/main.scss';
// import style from './abc.module.scss';


export default function App() {
  const Contact = React.lazy(() => import('./components/Contact'));

  return (
    <>
    <Sidebar />
    <div id="main">
    <About />
    <Skills />
    <Projects />
    <Suspense fallback={<div>Loading...</div>}>
      <Contact />
    </Suspense>
    </div>

    <div id="footer">
      <ul className="copyright">
        <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </div>
  </>
  )
}
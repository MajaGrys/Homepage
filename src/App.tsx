import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Grid, GridItem } from '@chakra-ui/react'
import './assets/css/App.scss';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatGPT from './components/ChatGPT';

export default function App() {
  return (
    <Grid templateColumns='repeat(12, 1fr)'>

    <GridItem colSpan={{ base: 12, md: 3, xl: 2 }}><Sidebar /></GridItem>

    <GridItem colSpan={{ base: 12, md: 9, xl: 10 }}>
    <main>
    <Routes>
      <Route path='' element={<About />} />
      <Route path='about' element={<About />} />
      <Route path='skills' element={<Skills />} />
      <Route path='projects' element={<Projects />} />
      <Route path='contact' element={<Contact />} />
      <Route path='chat' element={<ChatGPT />} />
    </Routes>
    </main>
    </GridItem>
    
    </Grid>
  )
}
import React from 'react';
import { FC } from 'react';
import { Image } from '@chakra-ui/react';

interface AnchorButton {
  url: string;
  additionalClassName?: string;
  text: string;
}

const menuConfig:AnchorButton[] = [
  {url: '#about', additionalClassName: 'fa-user', text: 'About Me'},
  {url: '#skills', additionalClassName: 'fa-th', text: 'Skills'},
  {url: '#projects', additionalClassName: 'fa-home', text: 'Projects'},
  {url: '#contact', additionalClassName: 'fa-envelope', text: 'Contact'}
]
          
const SidebarButton:FC<AnchorButton> = (props) => {
  const {url, additionalClassName, text} = props;
  const onClick = (e:React.MouseEvent) => onButtonClick(e, url) 
  return (
    <li><a href={url} onClick={onClick}><span className={`icon solid ${additionalClassName}`}>{text}</span></a></li>
  )
}

const onButtonClick = (e:React.MouseEvent, url:string) => {
  e.preventDefault()
  const scrollTo = document.querySelector(url)
  if (scrollTo) {
    scrollTo.scrollIntoView({
      behavior: 'smooth'
    })
  }
}

export default function Sidebar() {
    return (
      <div id="header">
        <div className="top">
          <div id="logo">

            <span className="image avatar48">
                <Image
                borderRadius='full'
                boxSize='150px'
                src='https://bit.ly/dan-abramov'
                alt='Maja Grys' />
            </span>

            <h1 id="title">Maja Grys</h1>
            <p>Frontend developer</p>

          </div>
    
          <nav id="nav">
            <ul>
              {menuConfig.map(configElement => SidebarButton(configElement))}
            </ul>
          </nav>
    
        </div>

        <div className="bottom">

        <ul className="icons">
          <li><a href="https://github.com/MajaGrys" className="icon brands fa-github"><span className="label">Github</span></a></li>
          <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
          <li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
        </ul>

        </div>
      </div>
    );
  }
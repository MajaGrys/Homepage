import React from 'react';
import { FC, useState } from 'react';
import { Image } from '@chakra-ui/react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import avatar from '../assets/images/IMG_20230724_175635.jpg';

interface AnchorButton {
  url: string;
  additionalClassName?: string;
  text: string;
}

const menuConfig:AnchorButton[] = [
  {url: '#about', additionalClassName: 'fa-user', text: 'About Me'},
  {url: '#skills', additionalClassName: 'fa-th', text: 'Skills'},
  {url: '#projects', additionalClassName: 'fa-home', text: 'Projects'},
  {url: '#contact', additionalClassName: 'fa-envelope', text: 'Contact'},
  {url: '#chat', additionalClassName: 'fa-user', text: 'Chat with AI'}
]
          
const SidebarButton:FC<AnchorButton> = (props) => {
  const {url, additionalClassName, text} = props;
  const onClick = (e:React.MouseEvent) => onButtonClick(e, url) 
  return (
    <li key={url}><a href={url} onClick={onClick}><span className={`icon solid ${additionalClassName}`}>{text}</span></a></li>
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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.createRef<HTMLDivElement>()
  const [isToggled, setIsToggled] = useState(false)
  const handleClick = () => {
    isToggled ? onClose() : onOpen()
    setIsToggled(!isToggled)
  }

  return (
    <> 
      <div id="headerToggle" ref={btnRef}>
				<a href="#header" className="toggle" onClick={handleClick}></a>
			</div>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay onClick={onClose} />
        <DrawerContent>
          <DrawerCloseButton />
          <SidebarContent />
        </DrawerContent>
      </Drawer>
    </>)
}

export function SidebarContent() {
    return (
      <div id="header">
        <div className="top">
          <div id="logo">

            <span className="image avatar48">
                <Image
                borderRadius='full'
                boxSize='150px'
                src={avatar}
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
          <li><a href="https://github.com/MajaGrys" className="icon brands fa-github" target="_blank"><span className="label">Github</span></a></li>
          <li><a href="mailto:majagrys@wp.pl" className="icon solid fa-envelope" target="_blank"><span className="label">Email</span></a></li>
        </ul>
        </div>
      </div>
    );
  }
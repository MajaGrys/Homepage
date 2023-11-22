import '../assets/css/Sidebar.scss';
import { FiHome, FiCompass, FiTrello, FiAtSign, FiMessageSquare } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { Icon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import avatar from '../assets/images/IMG_20230724_175635.jpg';

interface LinkItemsProps {
    url: string,
    name: string,
    icon: IconType
}

const LinkItems: Array<LinkItemsProps> = [
    {url: '#about', name: 'About', icon: FiHome},
    {url: '#skills', name: 'Skills', icon: FiCompass},
    {url: '#projects', name: 'Projects', icon: FiTrello},
    {url: '#contact', name: 'Contact', icon: FiAtSign},
    {url: '#chat', name: 'Chat with AI', icon: FiMessageSquare}
]

export default function Sidebar() {
    return (
        <nav>
            <div id='card'>
                <img src={avatar} id='avatar' alt='' />
                <figcaption>
                    <h1>Maja Grys</h1>
                    <h3>Frontend Developer</h3>
                </figcaption>
            </div>

            {LinkItems.map(link => {
                return (
                <Box
                as="a"
                href={link.url}
                key={link.name}
                p={{ base: '10px', md: '20px' }}
                color='purple.900'
                transition='0.5s'
                border='1px'
                borderColor='purple.400'
                borderBottomColor='purple.900'
                _hover={{ bg: 'purple.700', color: 'purple.100', borderColor: 'purple.900', borderRadius: 'xl' }}
                >
                    <Icon
                    as={link.icon}
                    fontSize="16"
                    mr={{ base: '2', md: '5' }} />
                    {link.name}
                    
                </Box>
                )
            })}
        </nav>
    )
}
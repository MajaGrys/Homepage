import '../assets/css/Sidebar.scss';
import { FiHome, FiTrello, FiCompass, FiAtSign, FiMessageSquare } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { Icon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import avatar from '../assets/images/IMG_20230724_175635.webp';

interface LinkItemsProps {
    url: string,
    name: string,
    icon: IconType
}

const LinkItems: Array<LinkItemsProps> = [
    {url: '#about', name: 'About', icon: FiHome},
    {url: '#projects', name: 'Projects', icon: FiTrello},
    {url: '#skills', name: 'Skills', icon: FiCompass},
    {url: '#contact', name: 'Contact', icon: FiAtSign},
    {url: '#chat', name: 'Chat with AI', icon: FiMessageSquare}
]

export default function Sidebar() {
    return (
        <nav>
            <div id='card'>
                <img src={avatar} id='avatar' alt='' />
                <figcaption>
                    <h1><div id='name'>Maja Grys</div>
                    <div id='title'>Frontend Developer</div></h1>
                </figcaption>
            </div>

            {LinkItems.map(link => {
                return (
                <Box
                as="a"
                href={link.url}
                key={link.name}
                p={{ base: '10px', sm: '20px' }}
                mr={{ base: '0', sm: '2', md: '0' }}
                color='purple.900'
                transition='0.5s'
                borderBottom='1px'
                borderBottomColor={{ base: 'transparent', md: 'purple.900' }}
                _hover={{ bg: 'purple.700', color: 'purple.100', borderColor: 'purple.900', borderRadius: 'xl' }}
                _focus={{ bg: 'purple.700', color: 'purple.100', borderColor: 'purple.900', borderRadius: 'xl' }}
                >
                    <Icon
                    as={link.icon}
                    fontSize={{ base: '26', sm: '35', md: '16' }}
                    mr={{ base: '0', md: '5' }} />
                    <span className='link-name'>{link.name}</span>
                    
                </Box>
                )
            })}
        </nav>
    )
}
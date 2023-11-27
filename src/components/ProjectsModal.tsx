
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { IoIosArrowDropright } from "react-icons/io";
import { ProjectsProps } from './ProjectsItems';

export const ProjectModal = (project: { key: string, project: ProjectsProps }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { name, description } = project.project;
  
    return (
    <>
      <button className='btn project-description-btn' onClick={onOpen}>
        Description <IoIosArrowDropright size='30px' />
      </button>
  
      <Modal isOpen={isOpen} onClose={onClose} size='xl' >
        <ModalOverlay />
        <ModalContent mx='20px' pb='24px'>
          <ModalHeader pb='0px' fontSize={{ base: '1.5em', sm: '2em' }}>{ name }</ModalHeader>
          <ModalCloseButton color='purple.900' _hover={{ color: 'purple.400' }} />
          <ModalBody>
            { description }
          </ModalBody>
        </ModalContent>
      </Modal>
      </>
    )
  }
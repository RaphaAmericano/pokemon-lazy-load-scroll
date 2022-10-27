import { Button, Modal, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useStores } from "../../stores";

export function ModalContainer(){
    const { modalStore: { children, isOpen, onOpen, onClose } } = useStores(); 

    return <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                {children}
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>Fechar</Button>
                </ModalFooter>
            </ModalContent>
    </Modal>
}
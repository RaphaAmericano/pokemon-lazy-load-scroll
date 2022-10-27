import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

export function useModal(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [children, setChildren] = useState<null | JSX.Element>(null); 

    return { children, setChildren, isOpen, onOpen, onClose }
}
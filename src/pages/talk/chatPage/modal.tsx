import { PropsWithChildren } from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";

type ArticleModalProps = {
    isOpen: boolean;
    onClose: () => void;
} & PropsWithChildren;

export const ArticleModal = ({ children, isOpen, onClose }: ArticleModalProps) => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>文章</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{children}</ModalBody>
                    <ModalFooter>
                        <Button colorScheme="brand" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

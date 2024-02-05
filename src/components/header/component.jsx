import { useState } from "react";
import { useContext } from "react";
import { createPortal } from 'react-dom';

import { Button } from '../button/component';
import { ModalContent } from '../modal-content/component';
import { UserContext } from "../contexts/user";


export const Header = () => {
    const { setUser, user } = useContext(UserContext);
    const [showModal, setShowModal] = useState(false);
    return (
        <header>
            Header
            <Button onClick={() => setShowModal(true)}>
                Login
            </Button>
            <Button onClick={() => setUser({ name: '', email: '' })}>
                Logout
            </Button>
            {showModal && createPortal(
                <ModalContent onClose={() => setShowModal(false)} />,
                document.body
            )}
        </header>
    )
};
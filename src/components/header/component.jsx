import { useState } from "react";
import { useContext } from "react";
import { createPortal } from 'react-dom';

import { Link } from "react-router-dom";

import { Button } from '../button/component';
import { ModalContent } from '../modal-content/component';
import { UserContext } from "../contexts/user";
import { CartContainer } from "../cart/container";


export const Header = () => {
    const { setUser, user } = useContext(UserContext);
    const [showModal, setShowModal] = useState(false);
    return (
        <header>
            Header
            <Link to="/">Home</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/restaurants">Restaurants</Link>
            <Link to="/basket">Basket</Link>
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
            < CartContainer />
        </header>
    )
};
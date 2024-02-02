import React from "react";
import { useState } from "react";
import { useContext } from "react";
// import { UserContext } from "../contexts/user";
import { Button } from '../button/component';

const UserContext = React.createContext({ name: 'Nobody', email: 'NoEmail' });

export const Header = () => {
    const [user, setUser] = useState({ name: '', email: '' });
    const contextedUser = useContext(UserContext);
    
    function login() {
        setUser({ name: 'Ivan', email: 'ivan@mail.ru' });
        console.log(user);
        console.log(contextedUser);
    }
    return (
        <header>
            Header
            <UserContext.Provider value={user}>
                <Button
                    // onClick={() => setUser({ name: 'Ivan', email: 'ivan@mail.ru' })}
                    onClick={login}
                >
                    Login
                </Button>
            </UserContext.Provider>
        </header>)
};
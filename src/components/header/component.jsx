import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Button } from '../button/component';
import { UserContext } from "../contexts/user";


export const Header = () => {
    const { setUser, user } = useContext(UserContext);
    // const {user} = useContext(UserContext);
    console.log(user);
    return (
        <header>
            Header
            {user.name?
            <><Button onClick={() => setUser({ name: '', email: '' })}>Logout </Button><span>{user.name}</span></>:
            <Button onClick={() => setUser({ name: 'Ivan', email: 'ivan@mail.ru' })}>Login</Button>
            }

        </header>
    )
};
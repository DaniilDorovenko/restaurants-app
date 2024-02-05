
import { useReducer } from 'react';
import { useContext } from "react";
import { UserContext } from "../contexts/user";
import { Button } from '../button/component';

function reducer(state, action) {

    switch (action.type) {
        case 'changed_name': {
            return {
                ...state,
                name: action.name,
            };
        }
        case 'changed_email': {
            return {
                ...state,
                email: action.email,
            };
        }
        case 'pressed_clear': {
            return {
                name: '',
                email: '',
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}


export const LoginForm = () => {
    const { setUser, user } = useContext(UserContext);

    const initialState = {
        name: user.name || '',
        email: '',
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const name_placeholder = 'Your Name';
    const email_placeholder = 'Your email';

    function handleNameInputChange(event) {
        dispatch({
            type: 'changed_name',
            name: event.target.value

        });
    }

    function handleEmailInputChange(event) {
        dispatch({
            type: 'changed_email',
            text: event.target.value
        });
    }

    function handleSubmitButton(event) {
        setUser({
            name: state.name,
            email: state.email
        })
    }

    function handleClearButton(event) {
        dispatch({
            type: 'pressed_clear',
            text: event.target.value
        });
    }

    return (
        <div>
            <input
                id="name"
                type='text'
                placeholder={name_placeholder}
                value={state.name}
                onChange={handleNameInputChange}
            />
            <input
                id="email"
                type='email'
                placeholder={email_placeholder}
                value={state.email}
                onChange={handleEmailInputChange}
            />
            <Button
                onClick={handleSubmitButton}>
                Submit
            </Button>
            <Button
                onClick={handleClearButton}>
                Clear
            </Button>
        </div>
    )
};
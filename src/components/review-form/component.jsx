
import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'changed_name': {
            return {
                ...state,
                name: action.name,
            };
        }
        case 'changed_text': {
            return {
                ...state,
                text: action.text,
            };
        }
        case 'changed_rating': {
            return {
                ...state,
                rating: action.rating,
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}

const initialState = {
    name: '',
    name_placeholder: 'Your Name',
    text: '',
    text_placeholder: 'Your review',
    rating: 10
};

export const ReviewForm = ({ reviews }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleNameInputChange(event) {
        dispatch({
            type: 'changed_name',
            name: event.target.value

        });
    }

    function handleTextInputChange(event) {
        dispatch({
            type: 'changed_text',
            text: event.target.value
        });
    }

    function handleRatingInputChange(event) {
        dispatch({
            type: 'changed_rating',
            rating: event.target.value
        });
    }

    return (
        <div>
            <input
                id="name"
                type='text'
                placeholder={state.name_placeholder}
                value={state.name}
                onChange={handleNameInputChange}
            />
            <input
                id="text"
                type='text'
                placeholder={state.text_placeholder}
                value={state.text}
                onChange={handleTextInputChange}
            />
            <input
                id="rating"
                type='range'
                value={state.rating}
                min='0'
                max='10'
                onChange={handleRatingInputChange}
            />
            <label htmlFor="rating">{state.rating}</label>
        </div>
    )
};
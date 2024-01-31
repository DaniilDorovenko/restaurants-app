
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

const initialState = { name: 'Your Name', text: 'Your review', rating: 10 };

export const ReviewForm = ({ reviews }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleNameInputChange(event) {
        dispatch({
            type: 'changed_name',
            nextName: event.target.value

        });
    }

    function handleTextInputChange(event) {
        dispatch({
            type: 'changed_text',
            nextName: event.target.value
        });
    }

    function handleRatingInputChange(event) {
        dispatch({
            type: 'changed_rating',
            nextName: event.target.value
        });
    }

    return (
        <div>
            <input
                id="name"
                type='text'
                value={state.name}
                onChange={handleNameInputChange}
            />
            <input
                id="text"
                type='text'
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
        </div>
    )
};
import { useReducer } from 'react';
import { useContext } from "react";
import { UserContext } from "../contexts/user";
import { useCreateReviewMutation, useGetUsersQuery } from '../../redux/services/api';

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

export const ReviewForm = (restaurantId) => {
    const { user } = useContext(UserContext);

    const [createReview, { isLoading }] = useCreateReviewMutation();
    const {data: users} = useGetUsersQuery();

    const initialState = {
        name: user.name || '',
        text: '',
        rating: 10,
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const name_placeholder = 'Your Name';
    const text_placeholder = 'Your review';

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
                placeholder={name_placeholder}
                value={state.name}
                onChange={handleNameInputChange}
            />
            <input
                id="text"
                type='text'
                placeholder={text_placeholder}
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

            <button
                onClick={() => createReview({
                    restaurantId,
                    newReview: {
                        userId: user.name ? user.name : users?.find(({ name }) => name === state.name).id,
                        text: state.text,
                        rating: state.rating
                    }
                }
                )}>
                Submit
            </button>
        </div>
    )
};
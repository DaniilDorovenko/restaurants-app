import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Review } from "../review/component";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews";
import { selectRestaurantReviewIds } from "../../redux/entities/restaurant/selectors";

export const Reviews = ({ restaurantId }) => {

    const [requestId, setRequestId] = useState();

    // const isLoading = useSelector(state => requestId && selectIsLoading(state, requestId));

    const dispatch = useDispatch();

    useEffect(() => {
        setRequestId(dispatch(getReviewsByRestaurantId(restaurantId)).requestId);
    }, [dispatch, restaurantId]);

    const reviews = useSelector(selectRestaurantReviewIds(restaurantId));

    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                {reviews.map((reviewId) => (
                    <li key={'r' + reviewId}>
                        <Review reviewId={reviewId}/>
                       
                    </li>
                ))}
            </ul>
        </div>
    )
};

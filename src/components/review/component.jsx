import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectReviewById } from "../../redux/entities/review/selectors";
import { selectUserById } from "../../redux/entities/user/selectors";

import { selectIsLoading } from '../../redux/ui/requset';
import { getReviewById } from "../../redux/entities/review/thunks/get-reviews";
// import { getUserById } from "../../redux/entities/user/thunks/get-users";

export const Review = ({ reviewId }) => {

    const [requestId, setRequestId] = useState();

    // const isLoading = useSelector(state => requestId && selectIsLoading(state, requestId));

    const dispatch = useDispatch();

    useEffect(() => {
        setRequestId(dispatch(getReviewById(reviewId)).requestId);
    }, [dispatch, reviewId]);

    const review = useSelector(selectReviewById(reviewId));
    // const user = useSelector(selectUserById(review.userId))
    console.log(review)

    return (
        <> {review ?
            (
                <>
                    {useSelector(selectUserById(review.userId))}
                    {review.text}
                    {review.rating}
                </>
            ) : ('Loading')}
        </>
    );
};

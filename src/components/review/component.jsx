import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { selectUserById } from "../../redux/entities/user/selectors";

export const Review = ({ reviewId }) => {
    const review = useSelector((state) => selectReviewById(state, reviewId));

    return (
        <>
            {useSelector((state) => selectUserById(state, review.userId)).name}
            {review.text}
            {review.rating}
        </>
    );
};

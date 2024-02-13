import { useSelector } from "react-redux";

import { selectReviewById } from "../../redux/entities/review/selectors";
import { selectUserById } from "../../redux/entities/user/selectors";

export const Review = ({ reviewId }) => {

    const review = useSelector(selectReviewById(reviewId));
    
    if (!review) {
        return null;
      }

    const userId = review.userId;
    const userName = useSelector(selectUserById(userId)).name;
 
    return (
        <> {review ?
            (
                <>
                    {/* {userName} */}
                    {review.text}
                    {review.rating}
                </>
            ) : ('Loading')}
        </>
    );
};

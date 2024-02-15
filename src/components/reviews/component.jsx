import { Review } from "../review/component";
import { useGetReviewsQuery } from "../../redux/services/api";


export const Reviews = ({ restaurantId }) => {

    const { data: reviews } = useGetReviewsQuery(restaurantId);

    if (!reviews) {
        return null;
    }

    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                {reviews.map((review) => (
                    <li>
                        <Review review={review} />
                    </li>
                ))}
            </ul>
        </div>
    )
};

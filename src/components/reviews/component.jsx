import { Review } from "../review/component";

export const Reviews = ({ reviews }) => {
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

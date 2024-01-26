export const Reviews = ({ reviews }) => {
    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                {reviews.map((item) => (
                    <li key={item.id}>
                        {item.user}
                        {item.text}
                        {item.rating}
                    </li>
                ))}
            </ul>
        </div>
    )
};
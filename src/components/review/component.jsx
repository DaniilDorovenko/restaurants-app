export const Review = ({ review }) => {

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

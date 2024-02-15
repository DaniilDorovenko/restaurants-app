import { useContext } from "react";

import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';
import { ReviewForm } from '../review-form/component';
import { UserContext } from "../contexts/user";

import { useGetRestaurantsQuery } from "../../redux/services/api";

export const Restaurant = ({ restaurantId }) => {
    const { user } = useContext(UserContext);
    const { data: restaurant } = useGetRestaurantsQuery(undefined, {
        selectFromResult: (result) => ({
            ...result,
            data: result.data.find(({ id }) => restaurantId === id),
        }),
    });

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <Menu restaurantId={restaurant.id} />
            {/* <Reviews restaurantId={restaurantId} /> */}
            {/* {user.name ? <ReviewForm user={user} /> : ''} */}
        </div>
    )
};
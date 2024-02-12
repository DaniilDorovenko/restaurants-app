import { useContext } from "react";
import { useSelector } from "react-redux";

import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';
import { ReviewForm } from '../review-form/component';
import { UserContext } from "../contexts/user";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const Restaurant = ({ restaurantId }) => {
    const {user} = useContext(UserContext);
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
    
    return (
        <div>
            <h1>{restaurant.name}</h1>
            <Menu menu={restaurant.menu} />
            {/* <Reviews reviews={restaurant.reviews} /> */}
            <Reviews reviews={restaurant.reviews} restaurantId={restaurantId} />
            {/* {user.name?<ReviewForm user={user}/>:''}          */}
        </div>
    )
};
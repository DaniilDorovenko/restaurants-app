import { useContext } from "react";
import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';
import { ReviewForm } from '../review-form/component';
import { UserContext } from "../contexts/user";

export const Restaurant = ({ restaurant }) => {
    // const {user} = useContext(UserContext);
    // console.log(user);
    return (
        <div>
            <h1>{restaurant.name}</h1>
            <Menu menu={restaurant.menu} />
            <Reviews reviews={restaurant.reviews} />
            <ReviewForm />
        </div>
    )
};
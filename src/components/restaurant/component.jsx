import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';

export const Restaurant = ({ restaurant }) => {
    return (
        <div>
            <h1>{restaurant.name}</h1>
            <Menu menu={restaurant.menu} />
            <Reviews reviews={restaurant.reviews} />
        </div>
    )
};
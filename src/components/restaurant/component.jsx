import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';

export const Restaurant = ({ restaurant_name, menu, reviews }) => {
    return (
        <div>
            <h1>{restaurant_name}</h1>
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
        </div>
    )
};
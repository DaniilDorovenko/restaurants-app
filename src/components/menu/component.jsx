import { Dish } from '../dish/component';

import { useGetMenuQuery } from "../../redux/services/api";

export const Menu = ({ restaurantId }) => {

    const { data: menu } = useGetMenuQuery(restaurantId);

    if (menu) return (
        <div>
            <h3>Menu</h3>
            <ul>
                {menu.map((dish) => (
                    <li key={dish.id}>
                        <Dish dish={dish} />
                    </li>
                ))}
            </ul>
        </div>
    )
};
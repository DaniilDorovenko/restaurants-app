import { Dish } from '../dish/component';

export const Menu = ({ menu }) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {menu.map((dish) => (
                    <Dish dish={dish} />
                ))}
            </ul>
        </div>
    )
};
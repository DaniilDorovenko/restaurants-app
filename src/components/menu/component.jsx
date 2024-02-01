import { Dish } from '../dish/component';

export const Menu = ({ menu }) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {menu.map((dish, index) => (
                    <li key={index}>
                        <Dish key={dish.id} dish={dish} />
                    </li>
                ))}
            </ul>
        </div>
    )
};
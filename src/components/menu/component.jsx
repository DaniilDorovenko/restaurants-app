import { Dish } from '../dish/component';

export const Menu = ({ menu }) => {

    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {menu.map((dishId) => (
                    <li key={'d' + dishId}>
                        <Dish key={dishId} dishId={dishId} />
                    </li>
                ))}
            </ul>
        </div>
    )
};
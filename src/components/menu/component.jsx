import { Dish } from '../dish/component';
import { getDishesByRestaurantId } from '../../redux/entities/dish/thunks/get-dishes';
import { selectRestaurantDishIds } from '../../redux/entities/restaurant/selectors';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

export const Menu = ({ restaurantId }) => {

    const [requestId, setRequestId] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        setRequestId(dispatch(getDishesByRestaurantId(restaurantId)).requestId);
    }, [dispatch, restaurantId]);

    const menu = useSelector(selectRestaurantDishIds(restaurantId));

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
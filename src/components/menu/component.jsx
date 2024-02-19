import { Dish } from '../dish/component';
import { getDishesByRestaurantId } from '../../redux/entities/dish/thunks/get-dishes';
import { selectRestaurantDishIds } from '../../redux/entities/restaurant/selectors';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
      
import { useGetMenuQuery } from "../../redux/services/api";

export const Menu = ({ restaurantId }) => {

    const { data: menu } = useGetMenuQuery(restaurantId);

    if (menu) return (
      
        <div>
            <h3>Menu</h3>
            <ul>
                {menu.map((dish) => (
                    <li>
                        <Dish dish={dish} />
                    </li>
                ))}
            </ul>
        </div>
    )
};
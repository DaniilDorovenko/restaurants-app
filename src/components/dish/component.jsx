import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from '../button/component';
import { Counter } from "../counter/component";

import { selectDishById } from "../../redux/entities/dish/selectors";
import { selectIsLoading } from '../../redux/ui/requset';
import { getDishById } from "../../redux/entities/dish/thunks/get-dishes";

import {
    decrement,
    increment,
    selectDishAmountById,
} from "../../redux/ui/cart";

import classNames from "classnames";
import styles from "./styles.module.scss"

export const Dish = ({ dishId }) => {
    const [count, setCount] = useState(0);

    const [requestId, setRequestId] = useState();

    // const isLoading = useSelector(state => requestId && selectIsLoading(state, requestId));

    const dispatch = useDispatch();

    useEffect(() => {
        setRequestId(dispatch(getDishById(dishId)).requestId);
    }, [dispatch, dishId]);

    const amount = useSelector((state) =>
        selectDishAmountById(state, dishId)
    );

    const dish = useSelector(selectDishById(dishId));

    return (<> {dish ? (
        <div key={dishId}>
            {dish.name && dish.name}
            {dish.price}
            {dish.ingredients}
            <Counter
            decrement={() => {
              dispatch(decrement(dishId));
            }}
            increment={() => {
              dispatch(increment(dishId));
            }}
            value={amount}
          />
        </div>) : ('Loading'

    )}</>

    );
};

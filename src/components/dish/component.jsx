import { Button } from '../button/component';
import { selectDishById } from "../../redux/entities/dish/selectors";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from '../../redux/ui/requset';

import classNames from "classnames";
import styles from "./styles.module.scss"
import { getDishById } from "../../redux/entities/dish/thunks/get-dishes";


export const Dish = ({ dishId }) => {
    const [count, setCount] = useState();

    const [requestId, setRequestId] = useState();

    // const isLoading = useSelector(state => requestId && selectIsLoading(state, requestId));

    const dispatch = useDispatch();

    useEffect(() => {
        setRequestId(dispatch(getDishById(dishId)).requestId);
    }, [dispatch, dishId]);

    const dish = useSelector(selectDishById(dishId));

    return (<> {dish ? (<div key={dishId}>
        {dish.name && dish.name}
        {dish.price}
        {dish.ingredients}
        <Button onClick={() => {
            if (count > 0) {
                setCount(count - 1);
            };
        }
        } disabled={count === 0}>-</Button>
        {count}
        <Button onClick={() => {
            if (count < 5) {
                setCount(count + 1);
            };
        }
        } disabled={count === 5}>+</Button>
    </div>) : ('Loading'

    )}</>

    );
};

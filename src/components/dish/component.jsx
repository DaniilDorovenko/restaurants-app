import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Counter } from "../counter/component";

import {
    decrement,
    increment,
    selectDishAmountById,
} from "../../redux/ui/cart";

import classNames from "classnames";
import styles from "./styles.module.scss"

export const Dish = ({ dish }) => {

    const [requestId, setRequestId] = useState();

    const isLoading = useSelector(state => requestId && selectIsLoading(state, requestId));

    const dispatch = useDispatch();


    const amount = useSelector((state) =>
        selectDishAmountById(state, dish.id)
    );


    const dish = useSelector(selectDishById(dishId));
    


    return (<> {dish ? (
        <div >
          <>
            {dish.name && dish.name}
            {dish.price}
            {dish.ingredients}</>
            <Counter
            decrement={() => {
              dispatch(decrement(dish.id));
            }}
            increment={() => {
              dispatch(increment(dish.id));
            }}
            value={amount}
          />
        </div>) : ('Loading'

    )}</>

    );
};

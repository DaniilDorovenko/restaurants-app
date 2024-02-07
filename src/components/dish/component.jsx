import { useSelector } from "react-redux";
import { useState } from "react";
import { Button } from '../button/component';
import { selectDishById } from "../../redux/entities/dish/selectors";

import classNames from "classnames";
import styles from "./styles.module.scss"

export const Dish = ({ dishId }) => {
    const [count, setCount] = useState(0);
    const dish = useSelector((state) => selectDishById(state, dishId));
    return (
        <div key={dishId}>
            {dish.name}
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
        </div>
    );
};
import { useState } from "react";
import { Button } from '../button/component';

import classNames from "classnames";
import styles from "./styles.module.scss"

export const Dish = ({ dish }) => {
    const [count, setCount] = useState(0);
    const [isMinusDisabled, setMinusDisabled] = useState(true);
    const [isPlusDisabled, setPlusDisabled] = useState(false);

    return (
        <li key={dish.id}>
            {dish.name}
            {dish.price}
            {dish.ingredients}
            <Button onClick={() => {
                if (count > 0) {
                    setCount(count - 1);
                    setPlusDisabled(false);
                } else if (count === 0) {
                    setMinusDisabled(true);
                };
            }
            } disabled={isMinusDisabled}>-</Button>
            {count}
            <Button onClick={() => {
                if (count < 5) {
                    setCount(count + 1);
                    setMinusDisabled(false);
                } else if (count === 5) {
                    setPlusDisabled(true);
                };
            }
            } disabled={isPlusDisabled}>+</Button>
        </li>
    );
};
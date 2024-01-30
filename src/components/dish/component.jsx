import { useState } from "react";
import { Button } from '../button/component';

import classNames from "classnames";
import styles from "./styles.module.scss"

export const Dish = ({ dish }) => {
    const [count, setCount] = useState(0);

    return (
        <div key={dish.id}>
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
                    setMinusDisabled(false);
                };
            }
            } disabled={count === 5}>+</Button>
        </div>
    );
};
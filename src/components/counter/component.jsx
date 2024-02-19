import { Button } from "../button/component";

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div>
      <Button onClick={decrement}>-</Button>
      {value}
      <Button onClick={increment}>+</Button>
    </div>
  );
};
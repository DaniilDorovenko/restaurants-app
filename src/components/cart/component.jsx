import { Dish } from "../dish/component";

export const Cart = ({ dishIds }) => {
  return (
    <div>
      {dishIds?.length
        ? dishIds.map((dishId) => <Dish dishId={dishId} />)
        : "Empty"}
    </div>
  );
};
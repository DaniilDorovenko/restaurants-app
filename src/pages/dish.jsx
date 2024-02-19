import { Dish } from "../components/dish/component";
import { useGetDishesQuery } from "../redux/services/api";
import { useParams } from "react-router-dom";

export const DishPage = () => {

    const { dishId } = useParams();

    const { data: dish } = useGetDishesQuery(undefined, {
        selectFromResult: (result) => ({
            ...result,
            data: (result.data && result.data.find(({ id }) => dishId === id)),
        }),
    });

    return (
        <Dish dish={dish} />
    )
};

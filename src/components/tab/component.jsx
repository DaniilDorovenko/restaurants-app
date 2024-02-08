import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { Button } from "../button/component";

export const Tab = ({ id, onClick }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    return (<Button onClick={onClick}>{restaurant.name}</Button>)
};

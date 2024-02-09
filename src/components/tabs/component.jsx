import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { Tab } from "../tab/component";

export const Tabs = ({ onSelect }) => {
    const restaurantIds = useSelector(selectRestaurantIds);

    return (
        <>
            {restaurantIds.map((id) => (
                <Tab id={id} onClick={() => onSelect(id)} ></Tab>
            ))
            }</>

    )
};

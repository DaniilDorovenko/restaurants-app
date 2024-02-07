import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { Tab } from "../tab/component";

export const Tabs = ({ onSelect, id }) => {
    const restaurantIds = useSelector(selectRestaurantIds);

    return (
        <>
            {restaurantIds.map((id) => (
                <Tab key={'button' + id} id={id} onClick={() => onSelect(id)} ></Tab>
            ))
            }</>

    )
};

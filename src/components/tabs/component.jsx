import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { Tab } from "../tab/component";

export const Tabs = ({ onSelect }) => {
    const restaurantIds = useSelector(selectRestaurantIds);
    console.log('tabs') //Array(0)

    return (
        <>
            {restaurantIds.map((id) => (
                <Tab id={id} onClick={() => onSelect(id)} ></Tab>
            ))
            }</>

    )
};

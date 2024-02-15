import { Tab } from "../tab/component";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const Tabs = ({ onSelect }) => {
    const { data: restaurants } = useGetRestaurantsQuery();
    return (
        <>
            {restaurants.map(({id, name}) => (
                <Tab key={id} name={name} onClick={() => onSelect(id)} ></Tab>
            ))
            }
            </>

    )
};

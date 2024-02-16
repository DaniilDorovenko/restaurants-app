import { Tab } from "../tab/component";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import { NavLink } from "react-router-dom";

export const Tabs = ({ onSelect }) => {
    const { data: restaurants } = useGetRestaurantsQuery();

    return (
        <>
            {restaurants.map(({ id, name }) => (
                <NavLink to={`/restaurants/${id}`}>
                    {({ isActive }) => (
                        <Tab
                            key={id}
                            name={name}
                            disabled={isActive}
                            onClick={() => onSelect(id)}
                        />
                    )}
                </NavLink>
            ))
            }
        </>

    )
};

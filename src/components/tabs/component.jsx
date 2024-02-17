import { Tab } from "../tab/component";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import { NavLink } from "react-router-dom";

export const Tabs = ({ onSelect, setActiveTab, activeTab}) => {
    const { data: restaurants } = useGetRestaurantsQuery();
    const DEFAULT_TAB = 'menu';
    return (
        <>
            {restaurants.map(({ id, name }) => (
                <NavLink key={id} to={`/restaurants/${id}/${DEFAULT_TAB}`}>
                    {({ isActive }) => (
                        <Tab
                            key={id}
                            name={name}
                            disabled={isActive}
                            onClick={() => {
                                onSelect(id);
                                setActiveTab({ id: id, name: DEFAULT_TAB });  
                            }
                            }
                        />
                    )}
                </NavLink>
            ))
            }
        </>

    )
};

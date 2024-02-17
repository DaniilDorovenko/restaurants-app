import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';
import { ReviewForm } from '../review-form/component';
import { UserContext } from "../contexts/user";

import { useGetRestaurantsQuery } from "../../redux/services/api";
import { Button } from "../button/component";
import { Tab } from "../tab/component";

export const Restaurant = ({ restaurantId, activeTab, setActiveTab }) => {
    const { user } = useContext(UserContext);
    const { data: restaurant } = useGetRestaurantsQuery(undefined, {
        selectFromResult: (result) => ({
            ...result,
            data: result.data.find(({ id }) => restaurantId === id),
        }),
    });
    const navigate = useNavigate();
    return (

        <div>
            <h1>{restaurant.name}</h1>
            <NavLink to={`/restaurants/${restaurantId}/menu`}>
                <Tab name='menu' onClick={() => {
                    setActiveTab({ id: restaurantId, name: 'menu' });
                    // navigate(`/restaurants/${restaurantId}/${activeTab.name}`, { replace: true });
                }
                    } />
            </NavLink>

            <NavLink to={`/restaurants/${restaurantId}/reviews`}>
                <Tab name='reviews' onClick={() => {
                    setActiveTab({ id: restaurantId, name: 'reviews' });
                    // navigate(`/restaurants/${restaurantId}/${activeTab.name}`, { replace: true });
                    }} />
            </NavLink>

            {(activeTab?.name == 'menu') && (activeTab?.id == restaurantId) && <Menu restaurantId={restaurantId} />}
            {(activeTab?.name == 'reviews') && (activeTab?.id == restaurantId) && <Reviews restaurantId={restaurantId} />}
            {user.name && <ReviewForm restaurantId={restaurantId} />}
        </div>
    )
};

import { Layout } from '../components/layout/component';
import { Restaurant } from '../components/restaurant/component'
import { Tabs } from "../components/tabs/component";


import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../redux/entities/restaurant/thunks/get-restaurants";
import { selectIsLoading } from '../redux/ui/requset';
import { getUsers } from '../redux/entities/user/thunks/get-users';
// import { selectRestaurantIds } from "../redux/entities/restaurant/selectors";
import { useGetRestaurantsQuery } from "../redux/services/api";

export const RestaurantPage = () => {
    
    const [currentRestaurantId, setCurrentRestaurantId] = useState();
    const { isLoading,} = useGetRestaurantsQuery();

    useEffect(() => {
        setRequestId(dispatch(getUsers()).requestId);
    }, [dispatch]);

    return (
        <Layout> {isLoading ? (
            <div>Loading...</div>
        ) : (
            <>
                <Tabs onSelect={setCurrentRestaurantId} />
                {currentRestaurantId && <Restaurant restaurantId={currentRestaurantId} />}
            </>
        )}
        </Layout>
    )

};

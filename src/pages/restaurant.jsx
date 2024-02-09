import { Layout } from '../components/layout/component';
import { Restaurant } from '../components/restaurant/component'
import { Tabs } from "../components/tabs/component";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../redux/entities/restaurant/thunks/get-restaurants";
import { selectIsLoading } from '../redux/ui/requset';
import { selectRestaurantIds } from "../redux/entities/restaurant/selectors";

export const RestaurantPage = () => {
    const [currentRestaurantId, setCurrentRestaurantId] = useState();
    
    const [requestId, setRequestId] = useState();

    const isLoading = useSelector(
        (state) => requestId && selectIsLoading(state, requestId)
    );
    const dispatch = useDispatch();

    useEffect(() => {
        setRequestId(dispatch(getRestaurants()).requestId);
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

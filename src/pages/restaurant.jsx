import { Restaurant } from '../components/restaurant/component'
import { Tabs } from "../components/tabs/component";

import { useState} from "react"

import { useGetRestaurantsQuery } from "../redux/services/api";

export const RestaurantPage = () => {
    
    const [currentRestaurantId, setCurrentRestaurantId] = useState();
    const { isLoading,} = useGetRestaurantsQuery();

    return (
        <> {isLoading ? (
            <div>Loading...</div>
        ) : (
            <>
                <Tabs onSelect={setCurrentRestaurantId} />
                {currentRestaurantId && <Restaurant restaurantId={currentRestaurantId} />}
            </>
        )}
        </>
    )

};

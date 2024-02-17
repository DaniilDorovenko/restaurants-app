import { Restaurant } from '../components/restaurant/component'
import { Tabs } from "../components/tabs/component";

import { useState} from "react"

import { useGetRestaurantsQuery } from "../redux/services/api";

export const RestaurantsPage = () => {
    
    const [currentRestaurantId, setCurrentRestaurantId] = useState();
    const [activeTab, setActiveTab] = useState();
    const { isLoading,} = useGetRestaurantsQuery();

    return (
        <> {isLoading ? (
            <div>Loading...</div>
        ) : (
            <>
                <Tabs onSelect={setCurrentRestaurantId} setActiveTab={setActiveTab} activeTab={activeTab}/>
                {currentRestaurantId && <Restaurant restaurantId={currentRestaurantId} 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                 />}
            </>
        )}
        </>
    )

};

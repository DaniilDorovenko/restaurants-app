import { useState } from "react";
import { Layout } from './components/layout/component';
import { restaurants } from "../materials/mock"
import { Restaurant } from './components/restaurant/component'
import { Button } from './components/button/component';
import { UserContext } from "./components/contexts/user";

export const App = () => {
  const [currentRestaurantNumber, setcurrentRestaurantNumber] = useState(0);
  const [user, setUser] = useState({ name: '', email: '' });

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Layout>
        {restaurants.map((restaurant, index) => (
          <div key={index}>
            <Button onClick={() => {
              setcurrentRestaurantNumber(index);
            }}>
              {restaurant.name}
            </Button>
          </div>
        ))}
        <Restaurant restaurant={restaurants[currentRestaurantNumber]} />
      </Layout>
    </UserContext.Provider>
  );
};

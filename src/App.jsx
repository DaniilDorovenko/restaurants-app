import { useState } from "react";
import { Layout } from './components/layout/component';
import { restaurants } from "../materials/mock"
import { Restaurant } from './components/restaurant/component'
import { Button } from './components/./button/component';

export const App = () => {
  const [currentRestaurantNumber, setcurrentRestaurantNumber] = useState(0);

  return (
    <Layout>
      {restaurants.map((restaurant, index) => (
        <div>
          <Button onClick={() => {
            setcurrentRestaurantNumber(index);
          }}>
            {restaurant.name}
          </Button>
        </div>
      ))}
      <Restaurant 
        key={restaurants[currentRestaurantNumber].id}
        restaurant={restaurants[currentRestaurantNumber]}
      />
    </Layout>
  );
};

import { Layout } from './components/layout/component';
import { restaurants } from "../materials/mock"
import { Restaurant } from './components/restaurant/component'

export const App = () => {
  return (
    <Layout>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          restaurant_name={restaurant.name}
          menu={restaurant.menu}
          reviews={restaurant.reviews}
        />
      ))}
    </Layout>
  );
};

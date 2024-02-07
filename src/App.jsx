import { useState } from "react";
import { store } from "./redux";
import { Provider, useSelector } from "react-redux";

import { Layout } from './components/layout/component';
import { Restaurant } from './components/restaurant/component'
import { UserContext } from "./components/contexts/user";
import { Tabs } from "./components/tabs/component";

export const App = () => {
  const [currentRestaurantId, setcurrentRestaurantId] = useState();
  const [user, setUser] = useState({ name: '', email: '' });
  
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout>
        <Tabs onSelect={setcurrentRestaurantId} />
         { currentRestaurantId && <Restaurant restaurantId={currentRestaurantId} />}
        </Layout>
      </UserContext.Provider>
    </Provider>
  );
};

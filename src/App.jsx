import { useState } from "react";
import { store } from "./redux";
import { Provider } from "react-redux";

import { UserContext } from "./components/contexts/user";
import { RestaurantPage } from "./pages/restaurant";

export const App = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <RestaurantPage />
      </UserContext.Provider>
    </Provider>
  );
};

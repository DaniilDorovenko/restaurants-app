import { Children, useState } from "react";
import { store } from "./redux";
import { Provider } from "react-redux";

import { UserContext } from "./components/contexts/user";

import { RestaurantsPage } from "./pages/restaurants";
import { HomePage } from "./pages/home";
import { Layout } from "./components/layout/component";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { element } from "prop-types";

export const App = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <HomePage />, },
        { path: 'contacts', element: <Contacts />, },
        { path: 'basket', element: <Basket />, },
        {
          path: 'restaurants', element: <RestaurantsPage />, children: [
            {
              path: ":restaurantId", element: <RestaurantPage />, children: [
                {
                  path: 'reviews', element: <Review />
                }
              ]
            },
          ]
        },
        { path: ':dishId', element: <Dish />, }
      ]
    }
  ])

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </Provider>
  );
};

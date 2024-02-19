import { Children, useState } from "react";
import { store } from "./redux";
import { Provider } from "react-redux";

import { UserContext } from "./components/contexts/user";

import { RestaurantsPage } from "./pages/restaurants";
import { RestaurantPage } from "./pages/restaurant";
import { HomePage } from "./pages/home";
import { ContactsPage } from "./pages/contacts";
import { BasketPage } from "./pages/basket";
import { ReviewsPage } from "./pages/reviews";
import { MenuPage } from "./pages/menu";
import { DishPage } from "./pages/dish";

import { Layout } from "./components/layout/component";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";



export const App = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <HomePage />, },
        { path: 'contacts', element: <ContactsPage />, },
        { path: 'basket', element: <BasketPage />, },
        {
          path: 'restaurants', element: <RestaurantsPage />, children: [
            {
              path: ":restaurantId", element: <RestaurantPage />, children: [
                { path: 'reviews', element: <ReviewsPage /> },
                { path: 'menu', element: <MenuPage /> }
              ]
            },
          ]
        },
        { path: 'dishes/:dishId', element: <DishPage />, }
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

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api = createApi({
    reducerPath: 'api',
    tagTypes: ["Dish", "Restaurant", "Review", "User"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
    endpoints: (builder) => ({
        getDishes: builder.query({
            query: () => ({
                url: "dishes",
            }),
        }),
        getMenu: builder.query({
            query: (restaurantId) => ({
              url: `dishes?restaurantId=${restaurantId}`,
            }),
          }),
        getRestaurants: builder.query({
            query: () => ({
                url: "restaurants",
            }),
        }),
        getReviews: builder.query({
            query: () => ({
                url: "reviews"
            }),
        }),
        getUsers: builder.query({
            query: () => ({
                url: "users",
            }),
        }),
    })
})

export const {
    useGetDishesQuery,
    useGetRestaurantsQuery,
    useGetReviewsQuery,
    useGetUsersQuery,
    useGetMenuQuery
} = api;

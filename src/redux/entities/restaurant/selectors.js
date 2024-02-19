export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantById = (id) => (state) => selectRestaurantModule(state).entities[id];

export const selectRestaurantReviewIds = (id) => (state) => selectRestaurantModule(state).entities[id].reviews;
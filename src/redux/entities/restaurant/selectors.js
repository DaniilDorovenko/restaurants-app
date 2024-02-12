export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantIds = (state) => {
    return selectRestaurantModule(state).ids};

export const selectRestaurantById = (state, id) =>
    selectRestaurantModule(state).entities[id];

// export const selectRestaurantById = (id) => (state) => selectRestaurantModule(state).entities[id];

export const selectRestaurantReviewIds = (state, id) =>
  selectRestaurantById(state, id)?.reviews;
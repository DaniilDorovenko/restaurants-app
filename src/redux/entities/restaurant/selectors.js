export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantIds = (state) => {
    console.log('restaurant selectors')
    return selectRestaurantModule(state).ids};

export const selectRestaurantById = (state, id) =>
    selectRestaurantModule(state).entities[id];
export const selectReviewModule = (state) => state.review;

export const selectReviewIds = (state) => selectReviewModule(state).ids;

export const selectReviewById = (id) => (state) => selectReviewModule(state).entities[id];

// export const selectReviewByRestaurantId  = (id) => (state) => selectReviewModule(state).entities[id];

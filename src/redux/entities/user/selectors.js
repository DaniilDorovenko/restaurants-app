export const selectUserModule = (state) => state.user;

export const selectUserIds = (state) => selectUserModule(state).ids;

export const selectUserById = (id) => (state) => selectUserModule(state).entities[id];  
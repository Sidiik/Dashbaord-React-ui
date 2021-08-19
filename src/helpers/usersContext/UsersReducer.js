export const UsersReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      return state.filter((state) => state.id !== action.id);
    case "ADD_USER":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 10000),
          name: action.users.name,
          password: action.users.password,
        },
      ];
    case "EDIT_USER":
      return [
        ...state,
        {
          name: action.users.name,
          password: action.users.password,
        },
      ];
    default:
      return state.filter();
  }
};

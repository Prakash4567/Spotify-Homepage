export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // Remove after finishing developing...
  token:
    "BQBM-lCCUl0hHOhCREmsXVJSv6aRBjcLcUbCRAFLMQ-nkUbtUUVo7RSMtHVSlPxlCX4pxUlWeSxkPcr17lhaU0LcOEZQSyX7wVBTF51X5EXfMzFENhkuI1PAktltkFVpbVVjJR3wyDwrqvbNhjpf74pd9VZdKmISbVy7BwyqFun5Uc9yelUG",
};

const reducer = (state, action) => {
  console.log(action);

  //Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;

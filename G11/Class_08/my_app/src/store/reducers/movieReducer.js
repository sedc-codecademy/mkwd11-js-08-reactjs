const initialState = {
  movieName: "",
  movies: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIE_NAME":
      return {
        ...state,
        movieName: action.payload,
      };

    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
        movieName: "",
      };

    default:
      return state;
  }
};

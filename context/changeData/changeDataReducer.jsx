export const changeDataReducer = (state, action) => {
  switch (action.type) {
    case '[dataChange] - Need upload':
      return {
        ...state,
        needUpload: action.payload,
      };

    case '[dataChange] - Categories':
      return {
        ...state,
        categories: action.payload,
      };

    case '[dataChange] - Products':
      return {
        ...state,
        products: action.payload,
      };

    case '[dataChange] - Users':
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

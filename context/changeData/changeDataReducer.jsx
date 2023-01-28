export const changeDataReducer = (state, action) => {
  switch (action.type) {
    case '[dataChange] - Need upload':
      return {
        ...state,
        needUpload: action.payload,
      };

    default:
      return state;
  }
};

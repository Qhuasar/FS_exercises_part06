export const filterAnecdotes = (filter) => {
  return {
    type: "FILTER_ANECDOTES",
    payload: {
      filter: filter,
    },
  }
}

const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "FILTER_ANECDOTES":
      return action.payload.filter
    default:
      return state
  }
}

export default filterReducer

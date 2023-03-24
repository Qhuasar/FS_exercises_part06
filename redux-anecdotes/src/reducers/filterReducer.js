import { createSlice } from "@reduxjs/toolkit"
/* export const filterAnecdotes = (filter) => {
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

*/

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterAnecdotes(state, action) {
      return action.payload
    },
  },
})

export default filterSlice.reducer
export const { filterAnecdotes } = filterSlice.actions

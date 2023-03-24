import { createSlice } from "@reduxjs/toolkit"
import anecdotesServices from "../services/anecdotes"

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addAnecdote(state, action) {
      return state.concat(action.payload)
    },
    addVote(state, action) {
      const updatedState = state.map((anecdote) => {
        return anecdote.id === action.payload
          ? { ...anecdote, votes: anecdote.votes + 1 }
          : anecdote
      })
      return updatedState
    },
  },
})

export const { addAnecdote, addVote } = anecdoteSlice.actions
export default anecdoteSlice.reducer

export const initializeAnecdotes = () => async (dispatch) => {
  const anecdotes = await anecdotesServices.getAll()
  anecdotes.forEach((anecdote) => dispatch(addAnecdote(anecdote)))
}

export const createNewAnecdote = (content) => async (dispatch) => {
  const anecdote = {
    content,
    id: getId(),
    votes: 0,
  }
  await anecdotesServices.create(anecdote)
  dispatch(addAnecdote(anecdote))
}

export const updateAnecdote = (id, anecdote) => async (dispatch) => {
  await anecdotesServices.update(id, anecdote)
  dispatch(addVote(id))
}

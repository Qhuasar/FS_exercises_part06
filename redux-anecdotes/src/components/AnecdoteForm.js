import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addNewAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    console.log(anecdote)
    event.target.anecdote.value = ""
    dispatch(addAnecdote(anecdote))
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addNewAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm

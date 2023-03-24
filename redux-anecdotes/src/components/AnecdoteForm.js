import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import {
  changeNotification,
  removeNotification,
} from "../reducers/notificationReducer"
const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addNewAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ""
    dispatch(addAnecdote(anecdote))
    dispatch(changeNotification(`Sucessfuly added ${anecdote} to the list`))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
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

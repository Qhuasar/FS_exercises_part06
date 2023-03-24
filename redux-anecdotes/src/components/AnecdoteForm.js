import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import {
  changeNotification,
  removeNotification,
} from "../reducers/notificationReducer"
import anecdotesServices from "../services/anecdotes"

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const getId = () => (100000 * Math.random()).toFixed(0)

  const addNewAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    const anecdote = {
      content: content,
      id: getId(),
      votes: 0,
    }
    event.target.anecdote.value = ""
    anecdotesServices.create(anecdote).then((res) => {
      dispatch(addAnecdote(anecdote))
      dispatch(changeNotification(`Sucessfuly added ${anecdote.content}`))
      setTimeout(() => {
        dispatch(removeNotification())
      }, 5000)
    })
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

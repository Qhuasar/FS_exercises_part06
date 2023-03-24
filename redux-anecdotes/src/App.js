import { useEffect } from "react"
import { useDispatch } from "react-redux"
import AnecdoteForm from "./components/AnecdoteForm"
import AnedcoteList from "./components/AnecdoteList"
import Filter from "./components/FIlter"
import Notification from "./components/Notification"
import anecdotesServices from "./services/anecdotes"
import { addAnecdote } from "./reducers/anecdoteReducer"
import {
  changeNotification,
  removeNotification,
} from "./reducers/notificationReducer"
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdotesServices
      .getAll()
      .then((anecdotes) => {
        anecdotes.forEach((anecdote) => {
          dispatch(addAnecdote(anecdote))
        })
      })
      .catch((error) => {
        console.error(error)
        dispatch(changeNotification(error))
        setTimeout(() => {
          dispatch(removeNotification())
        }, 5000)
      })
  }, [dispatch])
  
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnedcoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App

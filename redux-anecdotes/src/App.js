import { useEffect } from "react"
import { useDispatch } from "react-redux"
import AnecdoteForm from "./components/AnecdoteForm"
import AnedcoteList from "./components/AnecdoteList"
import Filter from "./components/FIlter"
import Notification from "./components/Notification"
import { initializeAnecdotes } from "./reducers/anecdoteReducer"

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initializeAnecdotes())
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

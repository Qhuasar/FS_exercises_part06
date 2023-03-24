import { useDispatch, useSelector } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"

const AnedcoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes)
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log("vote", id)
    dispatch(addVote(id))
  }
  const filteredAnecdotes = filter
    ? anecdotes.filter((anecdote) => anecdote.content.includes(filter))
    : anecdotes
  const sortedAnecdotes = filteredAnecdotes.sort((a, b) => {
    if (a.votes < b.votes) return 1
    if (a.votes > b.votes) return -1
    return 0
  })
  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnedcoteList

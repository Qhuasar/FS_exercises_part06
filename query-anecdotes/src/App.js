import { useMutation, useQuery, useQueryClient } from "react-query"
import AnecdoteForm from "./components/AnecdoteForm"
import Notification from "./components/Notification"
import { getAnecdotes, updateAnecdote } from "./requests"

const App = () => {
  const queryClient = useQueryClient()
  const votesMutation = useMutation(updateAnecdote, {
    onSuccess: (updatedAnecdote) => {
      const anecdotes = queryClient.getQueryData("anecdotes")
      queryClient.setQueryData(
        "anecdotes",
        anecdotes.map((anecdote) => {
          return anecdote.id === updatedAnecdote.id ? updatedAnecdote : anecdote
        })
      )
    },
  })
  const handleVote = (anecdote) => {
    votesMutation.mutate(anecdote)
    console.log("vote")
  }

  const anecdotes = useQuery("anecdotes", getAnecdotes, {
    retry: 3,
    refetchOnWindowFocus: false,
  })

  if (anecdotes.isError) {
    return <div>anecdote service not avalable due to problems in server</div>
  } else {
    return (
      <div>
        <h3>Anecdote app</h3>
        <Notification />
        <AnecdoteForm />
        {anecdotes.isLoading ? (
          <div>Loading...</div>
        ) : (
          anecdotes.data.map((anecdote) => (
            <div key={anecdote.id}>
              <div>{anecdote.content}</div>
              <div>
                has {anecdote.votes}
                <button onClick={() => handleVote(anecdote)}>vote</button>
              </div>
            </div>
          ))
        )}
      </div>
    )
  }
}

export default App

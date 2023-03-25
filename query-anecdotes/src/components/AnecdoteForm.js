import { useContext } from "react"
import { useMutation, useQueryClient } from "react-query"
import NotificationContext from "../NotificationContext"
import { createAnecdote } from "../requests"

const AnecdoteForm = () => {
  const [notificaiton, dispatch] = useContext(NotificationContext)
  const queryClient = useQueryClient()
  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData("anecdotes")
      queryClient.setQueryData("anecdotes", anecdotes.concat(newAnecdote))
    },
    onError: (error) => {
      dispatch({
        type: "CHANGE_NOTIF",
        payload: { notification: error.response.data.error },
      })
      setTimeout(() => {
        dispatch({ type: "REMOVE_NOTIF" })
      }, 5000)
    },
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    newAnecdoteMutation.mutate({
      content,
      votes: 0,
      id: Math.floor(Math.random() * 10000),
    })

    event.target.anecdote.value = ""
    dispatch({
      type: "CHANGE_NOTIF",
      payload: { notification: `Sucessfuly added ${content}` },
    })
    setTimeout(() => {
      dispatch({ type: "REMOVE_NOTIF" })
    }, 5000)
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm

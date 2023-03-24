import AnecdoteForm from "./components/AnecdoteForm"
import AnedcoteList from "./components/AnecdoteList"
import Filter from "./components/FIlter"
const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter/>
      <AnedcoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App

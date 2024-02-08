import { useEffect, useState } from 'react'
import './App.css'
import { IUser } from './Components/UsersList/Users.types'
import axios from 'axios'
import List from './Components/Shared/List/List'
import UserItem from './Components/UsersList/UserItem/UserItem'
import TodosItem from './Components/Todos/TodosItem'
import { ITodosItem } from './Components/Todos/TodosItem.types'
import EventExample from './Components/EventComponents/EventExample'

function App() {

  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodosItem[]>([])


  async function fetchUsers() {
    const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
    setUsers(response.data)
  }

  async function fetchTodos() {
    const response = await axios.get<ITodosItem[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")
    setTodos(response.data)
  }

  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, []) 


  return (
    <div>
      <EventExample />
      {/* <Card onDoNothingWithParams={(count) => alert("AloCount!" + `${count}`)}
      width='400px' height='100px' variant={CardVariant.primary} onDoNothing={() => alert("Alo!")}>
            <button>200</button>
            <div>111</div>
      </Card> */}
      <List items={users} backedItem={(user: IUser) => <UserItem key={user.id} user={user}/>} />
      <br />
      {/* <UsersList users={state}></UsersList> */}
      <List items={todos} backedItem={(todo: ITodosItem) => <TodosItem key={todo.id} todo={todo}/>} />
    </div>
  )
}

export default App

import './App.css'
import Card from './Components/Card/Card'
import { CardVariant } from './Components/Card/Card.types'
import { IUsersList } from './Components/UsersList/Users.types'
import UsersList from './Components/UsersList/UsersList'

function App() {
  const users: IUsersList[] = [
    {id: 1, name: "UnArc", email: "asf@gmail.com", address: {city: "Moscow", street: "Leninskaya", zipcode: "111"}},
    {id: 2, name: "AlArc", email: "asf@gmail.com", address: {city: "Spb", street: "Moskovskaya", zipcode: "222"}},
  ]
  return (
    <div>
      <Card onDoNothingWithParams={(count) => alert("AloCount!" + `${count}`)}
      width='400px' height='100px' variant={CardVariant.primary} onDoNothing={() => alert("Alo!")}>
            <button>200</button>
            <div>111</div>
      </Card>
      <UsersList users={users}></UsersList>
    </div>
  )
}

export default App

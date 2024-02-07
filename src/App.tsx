import './App.css'
import Card from './Components/Card/Card'
import { CardVariant } from './Components/Card/Card.types'


function App() {

  return (
    <div>
      <Card onDoNothingWithParams={(count) => alert("AloCount!" + `${count}`)}
      width='400px' height='100px' variant={CardVariant.primary} onDoNothing={() => alert("Alo!")}>
            <button>200</button>
            <div>111</div>
      </Card>
    </div>
  )
}

export default App

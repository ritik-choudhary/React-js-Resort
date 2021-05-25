import './App.css'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import SingleRoom from './Pages/SingleRoom'
import Error from './Pages/Error'
import Navbar from './Components/Navbar'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/rooms' component={Rooms}></Route>
        <Route exact path='/rooms/:slug' component={SingleRoom}></Route>
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App

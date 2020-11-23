import './App.css'
import Header from './components/Header'
import Home from './screens/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './screens/Checkout'
import Login from './screens/Login'
import { useEffect } from 'react'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Payment from './screens/Payment'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './screens/Orders'

const promise = loadStripe('pk_test_51Hqd4qCTLJBreJcR9lrrk5mRM3YHCZ4WGV7uwVp4QsRQG6MmPaa3pKYeLRApNdBikrpSOpcnurNgCwQmN747srr0005cPqEaQr')

function App () {
  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('USER', authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

export default App

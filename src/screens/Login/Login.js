import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { db, auth } from '../../firebase'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const signIn = e => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/')
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault()

    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
        if (auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png'
        />
      </Link>

      <div className='login__container'>
        <h1>Sign In</h1>

        <form action=''>
          <h5>Email</h5>
          <input
            type='text'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button className='login__signInButton' onClick={signIn}>Sign In</button>
        </form>

        <p>
          By continuing, you agree to Amazon Fake Clone Terms of Use . Please check the Privacy Notice , Cookie Notice and Notice Notification Based Interest .
        </p>

        <button className='login__registerButton' onClick={register}>Create your Amazon account</button>
      </div>

    </div>
  )
}

export default Login

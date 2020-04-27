import { useState, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { Input, FormGroup } from 'reactstrap'
import { useUser } from '../lib/hooks'

export default function LoginPage() {
  const [user, { mutate }] = useUser()
  const [errorMsg, setErrorMsg] = useState('')

  async function onSubmit(e) {
    e.preventDefault()

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    }
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (res.status === 200) {
      const userObj = await res.json()
      // set user to useSWR state
      mutate(userObj)
    } else {
      setErrorMsg('Incorrect username or password. Try better!')
    }
  }

  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.push('/')
  }, [user])

  return (
    <>
      <h1 className="text-center">
        Login
      </h1>
      {errorMsg && <p className="error">{errorMsg}</p>}
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <FormGroup>
            <label>Username</label>
            <Input type="text" name="username" required />
          </FormGroup>
          <FormGroup>
            <label>Password</label>
            <Input type="password" name="password" required />
          </FormGroup>
          <div className="submit">
            <button type="submit">Login</button>
            <Link href="/signup">
              <a>I don't have an account</a>
            </Link>
          </div>
        </form>
      </div>
      <style jsx>{`
        .form-container {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .error {
          color: brown;
          margin: 0.5rem 0;
          text-align: center;
        }
        .submit {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          justify-content: space-between;
        }
        .submit > button {
          padding: 0.5rem 1rem;
          cursor: pointer;
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .submit > button:hover {
          border-color: #888;
        }
        .submit > a {
          text-decoration: none;
        }
      `}</style>
    </>
  )
}

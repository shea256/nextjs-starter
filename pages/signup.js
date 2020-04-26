import { useState, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { Input, FormGroup } from 'reactstrap'
import { useUser } from '../lib/hooks'

export default function SignupPage() {
  const [user, { mutate }] = useUser()
  const [errorMsg, setErrorMsg] = useState('')

  async function onSubmit(e) {
    e.preventDefault()

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
      name: e.currentTarget.name.value,
    }

    if (body.password !== e.currentTarget.rpassword.value) {
      setErrorMsg(`The passwords don't match`)
      return
    }

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (res.status === 201) {
      const userObj = await res.json()
      // set user to useSWR state
      mutate(userObj)
    } else {
      setErrorMsg(await res.text())
    }
  }

  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.push('/')
  }, [user])

  return (
    <>
      <h1 className="text-center">
        Sign Up
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
          <FormGroup>
            <label>Repeat password</label>
            <Input type="password" name="rpassword" required />
          </FormGroup>
          <FormGroup>
            <label>Name</label>
            <Input type="text" name="name" required />
          </FormGroup>
          <div className="submit">
            <button type="submit">Sign up</button>
            <Link href="/login">
              <a>I already have an account</a>
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

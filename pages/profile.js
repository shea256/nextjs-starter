import { useEffect, useRef } from 'react'
import Router from 'next/router'
import { Input, FormGroup } from 'reactstrap'
import { useUser } from '../lib/hooks'

function ProfileEdit() {
  const [user, { mutate }] = useUser()
  const nameRef = useRef()

  useEffect(() => {
    if (!user) { return }
    nameRef.current.value = user.name
  }, [user])

  async function handleEditProfile(e) {
    e.preventDefault()

    const body = {
      name: nameRef.current.value,
    }
    console.log(body)
    const res = await fetch(`/api/user`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const updatedUser = await res.json()

    mutate(updatedUser)
  }

  async function handleDeleteProfile() {
    const res = await fetch(`/api/user`, {
      method: 'DELETE',
    })

    if (res.status === 204) {
      mutate({ user: null })
      Router.replace('/')
    }
  }

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleEditProfile}>
          <FormGroup>
            <label>Username</label>
            <Input type="text" defaultValue={user.username} readOnly />
          </FormGroup>
          <FormGroup>
            <label>Name</label>
            <Input type="text" ref={nameRef} defaultValue={user.name} required
              onChange={(event) => nameRef.current.value = event.target.value} />
          </FormGroup>
          <div className="submit">
            <button type="submit">Update profile</button>
            <a role="button" className="delete" onClick={handleDeleteProfile}>
              Delete profile
            </a>
          </div>
        </form>
      </div>
      <style jsx>{`
        .delete {
          color: #f44336;
          cursor: pointer;
        }
        .delete:hover {
          color: #b71c1c;
        }
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

export default function ProfilePage() {
  const [user, { loading }] = useUser()

  useEffect(() => {
    // redirect user to login if not authenticated
    if (!loading && !user) {
      Router.replace('/login')
    }
  }, [user, loading])

  return (
    <>
      <h1 className="text-center">
        Profile
      </h1>
      {user && (
        <>
          {/*<p>Your profile: {JSON.stringify(user)}</p>*/}
          <ProfileEdit />
        </>
      )}
    </>
  )
}

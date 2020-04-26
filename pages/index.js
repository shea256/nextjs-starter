import { useUser } from '../lib/hooks'
import UserList from '../components/UserList'

export default function HomePage() {
  const [user] = useUser()
  return (
    <>
      <div className="hero">
        <h1>
          Passport.js + Next-Connect Example
        </h1>
        <h3>Steps to test the example:</h3>
        <h5>Sign up</h5>
        <ol>
          <li>Click Sign up and enter a username and password.</li>
          <li>You will be logged in and redirected home.</li>
          <li>Click Logout. You will be redirected home.</li>
          <li>
            Try sign up again with the same username, you will see an error.
          </li>
        </ol>
        <h5>Sign in</h5>
        <ol>
          <li>Click Login and login again using the same credential.</li>
          <li>You will see an error if you use incorrect credential.</li>
          <li>Otherwise, you will be authenticated and redirected home.</li>
        </ol>
        <h5>Edit profile</h5>
        <ol>
          <li>Click Profile</li>
          <li>Enter a new name and click Update profile.</li>
          <li>Notice how the name in Your profile has changed.</li>
          <li>Click Delete profile</li>
          <li>
            The user is removed and is no longer shown in All users section in
            Home
          </li>
        </ol>
        {user && <p>Currently logged in as: {JSON.stringify(user)}</p>}
        <UserList />
      </div>
      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
        .hero {
          margin-top: 60px;
        }
      `}</style>
    </>
  )
}

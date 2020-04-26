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
        {user && (
          <>
            <h3>
              Current User
            </h3>
            <p>
              <li>Name: {user.name}</li>
              <li>Username: {user.username}</li>
            </p>
          </>
          )
        }
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

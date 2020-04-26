import useSWR from 'swr'
import { fetcher } from '../lib/hooks'

export default function UserList() {
  const { data: { users } = {} } = useSWR('/api/users', fetcher)
  return (
    <>
      <h3>All Users</h3>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {!!users?.length && (
          <>
            {users.map((user, index) => (
              <tr key={user.username}>
                <th scope="row">{index}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
              </tr>
            ))}
          </>
        )}
        </tbody>
      </table>
    </>
  )
}
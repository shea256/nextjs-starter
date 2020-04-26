import useSWR from 'swr'
import { fetcher } from '../lib/hooks'

export default function UserList() {
  const { data: { users } = {} } = useSWR('/api/users', fetcher)
  return (
    <>
      <h3>All users</h3>
      {!!users?.length && (
        <ul>
          {users.map(user => (
            <li key={user.username}>{JSON.stringify(user)}</li>
          ))}
        </ul>
      )}
    </>
  )
}
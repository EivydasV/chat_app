import { useQueryClient } from 'react-query'
import { IUser } from '../types/user'

export default function Home() {
  const queryClient = useQueryClient()
  const me = queryClient.getQueryData<IUser>('me')

  return (
    <div>
      <pre>{JSON.stringify(me?.data?.user, null, 2)}</pre>
    </div>
  )
}

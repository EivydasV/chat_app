import { useQueryClient } from 'react-query'
import { Navigate, Outlet } from 'react-router-dom'
import { IUser } from '../types/user'

const PublicRoutes = () => {
  const queryClient = useQueryClient()
  const me = queryClient.getQueryData<IUser>('me')
  console.log(me?.data?.user)

  return me?.data?.user ? <Navigate to='/login' /> : <Outlet />
}

export default PublicRoutes

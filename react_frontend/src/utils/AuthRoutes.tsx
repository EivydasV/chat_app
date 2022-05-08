import { useQueryClient } from 'react-query'
import { Navigate, Outlet } from 'react-router-dom'
import { IUser } from '../types/user'

const AuthRoutes = () => {
  const queryClient = useQueryClient()
  const me = queryClient.getQueryData<IUser>('me')
  return me?.data?.user ? <Outlet /> : <Navigate to='/login' />
}

export default AuthRoutes

import { useState } from 'react'
import { Button } from '@mantine/core'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import AppShellComponent from './components/AppShell'
import Register from './pages/Register'
import axios, { AxiosError } from 'axios'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import ModalComponent from './components/ErrorModal'
import { AxiosErr } from './types/axiosError'
import SuperTokens from 'supertokens-auth-react'
import Session from 'supertokens-auth-react/recipe/session'
import Me from './components/http/me'
import { ReactQueryDevtools } from 'react-query/devtools'
import AuthRoutes from './utils/AuthRoutes'

SuperTokens.init({
  appInfo: {
    // learn more about this on https://supertokens.com/docs/session/appinfo
    appName: 'eivydas',
    apiDomain: 'http://localhost:5000',
    websiteDomain: 'http://localhost:3000',
    apiBasePath: '/auth',
    websiteBasePath: '/auth',
  },
  recipeList: [Session.init()],
})
axios.defaults.baseURL = 'http://localhost:5000/v1/api'
Session.addAxiosInterceptors(axios)

const queryClient = new QueryClient()
function App() {
  const navigate = useNavigate()

  const [isErrorModalOpened, setIsErrorModalOpened] = useState(false)
  const [modalError, setModalError] = useState<AxiosErr | null>(null)
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error: AxiosError<AxiosErr>) => {
      switch (error?.response?.status) {
        case 500:
          setModalError(error?.response?.data)
          setIsErrorModalOpened(true)
          break
        case 401:
          navigate('/login', { replace: true })
          break
        default:
          return Promise.reject(error)
      }
    }
  )
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Me>
          <ModalComponent
            modalError={modalError}
            isErrorModalOpened={isErrorModalOpened}
            setIsErrorModalOpened={setIsErrorModalOpened}
          />
          <Routes>
            <Route path='/' element={<AuthRoutes />}>
              <Route path='app/*' element={<AppShellComponent />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Navigate to='/app' replace />} />
          </Routes>
        </Me>
      </QueryClientProvider>
    </>
  )
}

export default App

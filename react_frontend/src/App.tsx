<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ContactMe from "./pages/CantactMe";
import { Box } from "@mantine/core";
=======
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
>>>>>>> parent of 6333fa6 (commit)
function App() {
  return (
    <>
<<<<<<< HEAD
      <Header />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
=======
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
>>>>>>> parent of 6333fa6 (commit)
    </>
  );
}

export default App;

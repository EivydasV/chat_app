import { useState } from 'react'
import { Button } from '@mantine/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import AppShellComponent from './components/AppShell'
import Register from './pages/Register'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='app/*' element={<AppShellComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

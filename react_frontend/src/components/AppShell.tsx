import { AppShell, Header } from '@mantine/core'
import { FC, PropsWithChildren, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NavBar from './NavBar'
const AppShellComponent: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <AppShell
      padding='md'
      navbar={<NavBar />}
      header={
        <Header height={60} p='xs'>
          {/* Header content */}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </AppShell>
  )
}

export default AppShellComponent

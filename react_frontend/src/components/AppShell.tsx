import { AppShell, Navbar, Header } from '@mantine/core'
import { FC, PropsWithChildren } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
const AppShellComponent: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <AppShell
      padding='md'
      navbar={
        <Navbar width={{ base: 300 }} height={500} p='xs'>
          {/* Navbar content */}
        </Navbar>
      }
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

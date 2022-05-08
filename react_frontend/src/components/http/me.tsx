import { Box, LoadingOverlay } from '@mantine/core'
import axios from 'axios'
import { FC, PropsWithChildren } from 'react'
import { useQuery } from 'react-query'

const Me: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { data, isLoading } = useQuery('me', () => axios.get('/auth/me'), {
    retry: false,
    staleTime: Infinity,
  })

  return <>{isLoading ? <LoadingOverlay visible={isLoading} /> : children}</>
}

export default Me

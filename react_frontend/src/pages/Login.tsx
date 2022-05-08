import {
  Box,
  Button,
  Center,
  Divider,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
  LoadingOverlay,
} from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import {
  IoAtCircle,
  IoLockClosed,
  IoPersonCircleOutline,
} from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { loginSchema } from '../schema/loginSchema'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import axios, { AxiosError } from 'axios'
import { AxiosErr } from '../types/axiosError'
import { useEffect } from 'react'
const Login = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { mutate, error, isLoading, isSuccess } = useMutation<
    any,
    AxiosError<AxiosErr>
  >((data) => axios.post('/auth/login', data), {
    retry: false,
    onSuccess: () => queryClient.invalidateQueries('me'),
  })
  const loginForm = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    schema: zodResolver(loginSchema),
  })

  useEffect(() => {
    if (isSuccess) {
      navigate('/app')
    }
  }, [isSuccess])

  return (
    <div>
      <Center
        sx={{ maxWidth: 550, height: '80vh', position: 'relative' }}
        mx='auto'
      >
        <LoadingOverlay visible={isLoading} />
        <Paper shadow='sm' sx={{ width: '100%' }} px='md' py='sm'>
          <Title order={1} align='center' pb='sm'>
            Login
          </Title>
          <Divider size='sm' />
          <Box mt={'xs'}>
            <form
              onSubmit={loginForm.onSubmit((values) => mutate(values as any))}
              noValidate={true}
            >
              <Stack spacing={'sm'}>
                <TextInput
                  label='Email'
                  placeholder='Your email'
                  type='email'
                  icon={<IoAtCircle size={16} />}
                  {...loginForm.getInputProps('email')}
                />
                <PasswordInput
                  label='Password'
                  placeholder='Your password'
                  icon={<IoLockClosed size={14} />}
                  {...loginForm.getInputProps('password')}
                />

                <Text color={'red'} align='center'>
                  {error?.response?.data?.message}
                </Text>
                <Button
                  leftIcon={<IoPersonCircleOutline size={18} />}
                  uppercase
                  type='submit'
                >
                  Login
                </Button>
                <Text color={'gray'} align='center' weight={500}>
                  do not have an account?{' '}
                  <Text<typeof Link>
                    component={Link}
                    variant='link'
                    to='/register'
                  >
                    Register
                  </Text>
                </Text>
              </Stack>
            </form>
          </Box>
        </Paper>
      </Center>
    </div>
  )
}
export default Login

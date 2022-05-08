import {
  Box,
  Button,
  Center,
  Divider,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
  Text,
} from '@mantine/core'
import {
  IoAtCircle,
  IoLockClosed,
  IoPersonCircleOutline,
  IoPerson,
} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import StrongPassword from '../components/StrongPassword'
import { useForm, zodResolver } from '@mantine/form'
import { registerSchema } from '../schema/registerSchema'
const Register = () => {
  const registerForm = useForm({
    initialValues: {
      email: '',
      password: '',
      name: '',
      password_confirmation: '',
    },
    schema: zodResolver(registerSchema),
  })
  return (
    <div>
      <Center sx={{ maxWidth: 550, height: '80vh' }} mx='auto'>
        <Paper shadow='sm' sx={{ width: '100%' }} px='md' py='sm'>
          <Title order={1} align='center' pb='sm'>
            Register
          </Title>
          <Divider size='sm' />
          <Box mt={'xs'}>
            <form
              onSubmit={registerForm.onSubmit((values) => console.log(values))}
              noValidate={true}
            >
              <Stack spacing={'sm'}>
                <TextInput
                  label='Name'
                  placeholder='Your name'
                  type='text'
                  icon={<IoPerson size={16} />}
                  {...registerForm.getInputProps('name')}
                />
                <TextInput
                  label='Email'
                  placeholder='Your email'
                  type='email'
                  icon={<IoAtCircle size={16} />}
                  {...registerForm.getInputProps('email')}
                />
                <StrongPassword
                  label='Password'
                  placeholder='Your passwor'
                  icon={<IoLockClosed size={16} />}
                  registerForm={registerForm}
                />
                <PasswordInput
                  label='Confirm Password'
                  placeholder='Your confirm password'
                  icon={<IoLockClosed size={16} />}
                  {...registerForm.getInputProps('password_confirmation')}
                />
                <Button
                  leftIcon={<IoPersonCircleOutline size={18} />}
                  type='submit'
                  uppercase
                >
                  Register
                </Button>
                <Text color={'gray'} align='center' weight={500}>
                  Already have an account?{' '}
                  <Text<typeof Link>
                    component={Link}
                    variant='link'
                    to='/login'
                  >
                    Login
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
export default Register

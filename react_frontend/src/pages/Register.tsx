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
} from '@mantine/core'
import {
  IoAtCircle,
  IoLockClosed,
  IoPersonCircleOutline,
  IoPerson,
} from 'react-icons/io5'
import StrongPassword from '../components/StrongPassword'
const Register = () => {
  return (
    <div>
      <Center sx={{ maxWidth: 500, height: 500 }} mx='auto'>
        <Paper shadow='sm' sx={{ width: '100%' }} px='md' py='sm'>
          <Title order={1} align='center' pb='sm'>
            Register
          </Title>
          <Divider size='sm' />
          <Box mt={'xs'}>
            <Stack spacing={'sm'}>
              <TextInput
                label='Name'
                placeholder='Your name'
                type='text'
                icon={<IoPerson size={16} />}
              />
              <TextInput
                label='Email'
                placeholder='Your email'
                type='email'
                icon={<IoAtCircle size={16} />}
              />
              <StrongPassword
                label='Password'
                placeholder='Your passwor'
                icon={<IoLockClosed size={16} />}
              />
              <PasswordInput
                label='Confirm Password'
                placeholder='Your confirm password'
                icon={<IoLockClosed size={16} />}
              />
              <Button leftIcon={<IoPersonCircleOutline size={18} />} uppercase>
                Register
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Center>
    </div>
  )
}
export default Register

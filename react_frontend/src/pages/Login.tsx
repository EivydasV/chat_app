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
} from 'react-icons/io5'
const Login = () => {
  return (
    <div>
      <Center sx={{ maxWidth: 500, height: 500 }} mx='auto'>
        <Paper shadow='sm' sx={{ width: '100%' }} px='md' py='sm'>
          <Title order={1} align='center' pb='sm'>
            Login
          </Title>
          <Divider size='sm' />
          <Box mt={'xs'}>
            <Stack spacing={'sm'}>
              <TextInput
                label='Email'
                placeholder='Your email'
                type='email'
                icon={<IoAtCircle size={16} />}
              />
              <PasswordInput
                label='Password'
                placeholder='Your password'
                icon={<IoLockClosed size={14} />}
              />
              <Button leftIcon={<IoPersonCircleOutline size={18} />} uppercase>
                Login
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Center>
    </div>
  )
}
export default Login

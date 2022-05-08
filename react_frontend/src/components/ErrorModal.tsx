import { Button, Divider, Group, Modal, Text, Title } from '@mantine/core'
import { FC } from 'react'
import { AxiosErr } from '../types/axiosError'
interface IErrorModal {
  isErrorModalOpened: boolean
  setIsErrorModalOpened: React.Dispatch<React.SetStateAction<boolean>>
  modalError: AxiosErr | null
}

const ErrorModal: FC<IErrorModal> = ({
  isErrorModalOpened,
  setIsErrorModalOpened,
  modalError,
}) => {
  return (
    <div>
      <Modal
        centered
        opened={isErrorModalOpened}
        onClose={() => setIsErrorModalOpened(false)}
        title={
          <Title
            order={1}
            color={'red'}
            sx={(theme) => ({ color: theme.colors.red[6] })}
          >
            {modalError?.statusCode || 500}
          </Title>
        }
      >
        <Divider color={'red'} />
        <Text color='red' size='lg' mt={'sm'}>
          {modalError?.message || 'Something went wrong'}
        </Text>
        <Group position='right'>
          <Button color={'yellow'} onClick={() => setIsErrorModalOpened(false)}>
            Ok
          </Button>
        </Group>
      </Modal>
    </div>
  )
}

export default ErrorModal

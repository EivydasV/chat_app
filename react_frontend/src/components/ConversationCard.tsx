import { Box, Group, Avatar, Stack, Text } from '@mantine/core'
import userAvatar from '../assets/images/user.png'
import { useHover } from '@mantine/hooks'
const ConversationCard = () => {
  const { hovered, ref } = useHover()
  return (
    <Box
      py={'sm'}
      px={'xs'}
      ref={ref}
      sx={(theme) => ({
        backgroundColor: hovered ? theme.colors.gray[1] : '',
        borderRadius: 20,
        cursor: 'pointer',
      })}
    >
      <Group>
        <Avatar src={userAvatar} radius='xl' size={'md'} />
        <Stack spacing={'xs'} justify='center'>
          <Text sx={(theme) => ({ lineHeight: 0 })} weight='bold'>
            Eivydas
          </Text>
          <Text
            sx={(theme) => ({ lineHeight: 1 })}
            color='gray'
            size='sm'
            lineClamp={1}
          >
            Lorem ipsum dolor sit
          </Text>
        </Stack>
      </Group>
    </Box>
  )
}

export default ConversationCard

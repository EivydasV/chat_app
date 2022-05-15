import {
  Divider,
  Navbar,
  Title,
  Text,
  Box,
  Avatar,
  Group,
  Stack,
  ScrollArea,
} from '@mantine/core'
import ConversationCard from './ConversationCard'

const NavBar = () => {
  return (
    <Navbar width={{ base: 300 }} p='xs'>
      <Navbar.Section mt='xs'>
        <Title order={2} color='dimmed'>
          Conversations
        </Title>
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx='-xs' px='xs'>
        {[...Array(20).keys()].map((i) => (
          <ConversationCard key={i} />
        ))}
      </Navbar.Section>
    </Navbar>
  )
}

export default NavBar

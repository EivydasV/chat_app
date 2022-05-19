import {
  Box,
  Button,
  Divider,
  Group,
  Input,
  InputWrapper,
  Stack,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

const CantactMe = () => {
  return (
    <Group grow mt='xl'>
      <Group position="center">
        <Box sx={{ width: "500px" }}>
          <Title >Cantact me </Title>
          <Divider my='sm'/>
          <form>
            <Stack spacing="lg" justify="center">
              <Stack>
                <InputWrapper label="Email">
                  <Input
                    placeholder="Your email"
                    radius="md"
                    variant="filled"
                    size="md"
                  />
                </InputWrapper>
              </Stack>
              <Stack>
                <InputWrapper label="Name">
                  <Input
                    placeholder="Your name"
                    radius="md"
                    variant="filled"
                    size="md"
                  />
                </InputWrapper>
              </Stack>
              <Stack>
                <Textarea
                  placeholder="Your message"
                  radius="md"
                  label="message"
                  size="md"
                />
              </Stack>
              <Stack>
                <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Submit</Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Group>
    </Group>
  );
};

export default CantactMe;

import {
  Box,
  Button,
  Group,
  Input,
  InputWrapper,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";

const CantactMe = () => {
  return (
    <Group grow>
      <Group position="center">
        <Box sx={{ width: "500px" }}>
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
                <Button>Submit</Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Group>
      <Group position="center">aside 2</Group>
    </Group>
  );
};

export default CantactMe;

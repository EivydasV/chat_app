import { Box, Button, Group, Title } from "@mantine/core";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      py={"md"}
      px="lg"
      mb="lg"
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[8],
        color: theme.colors.gray[0],
        boxShadow: `0 1px 20px ${theme.colors.gray[7]}`,
      })}
    >
      <Group grow>
        <Group grow>
          <span>
            <Title
              component={Link}
              to="/"
              sx={{
                cursor: "pointer",
                display: "inline",
                textDecoration: "none",
              }}
              order={2}
            >
              Portfolio
            </Title>
          </span>
        </Group>
        <Group position="right">
          <Link to="contactme">
            <Button variant="gradient">Contact me </Button>
          </Link>
        </Group>
      </Group>
    </Box>
  );
};

export default Header;

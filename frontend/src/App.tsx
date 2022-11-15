import { Box, styled, Typography } from "@mui/material";
import useTheme from "@mui/system/useTheme";
import NotificationButton from "./components/NotificationButton";

function App() {
  const theme = useTheme();
  return (
    <Container>
      <Typography color={theme.palette.primary.main}>Hello World!!!</Typography>
      <NotificationButton />
    </Container>
  );
}

const Container = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
}));

export default App;

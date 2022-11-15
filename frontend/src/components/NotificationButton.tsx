import { Box, alpha, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { COLORS } from "../styles/colors";

import NotificationIcon from "../assets/NotificationIcon";

interface Props extends BoxProps {}

function NotificationButton({ ...rest }: Props) {
  return (
    <Container as={"button"} {...rest}>
      <Icon />
    </Container>
  );
}

const Icon = styled(NotificationIcon)(({ theme }) => ({
  color: COLORS.red,
  fontSize: theme.typography.h4.fontSize,
  alignItems: "center",
  justifyContent: "center",
}));

const Container = styled(
  Box,
  {}
)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",

  width: theme.typography.h3.fontSize,
  height: theme.typography.h3.fontSize,

  background: alpha(theme.palette.red.medium, 0.1),
  border: `solid 1px ${theme.palette.red.medium}`,
  borderRadius: theme.shape.borderRadius,

  cursor: "pointer",
  "&:hover": {
    background: alpha(theme.palette.red.medium, 0.2),
  },
}));

export default NotificationButton;

import styled from "@emotion/styled";
import { Container } from "@mui/material";

// STYLED COMPONENTS
export const Title = styled("h1")({
  color: "purple",
  fontSize: "40px",
  margin: 0,
  height: "fit-content",
});

export const MyCostumContainer = styled(Container)({
  marginTop: "30px",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "space-around",
  gap: "20px",
});

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import logo from ".../logo.jpg";
export default function ShowLogo(img) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {/* <img src={AppLogo} alt={"App logo"} loading="lazy" /> */}
      </Container>
    </React.Fragment>
  );
}

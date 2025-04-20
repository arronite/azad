import { Container } from "@mui/material";
import React from "react";
import { LoginSection } from "../../features/auth/LoginSection";

const LoginPage = () => {
  return (
    <Container className="flex-center" sx={{ width: "100%" }}>
      <LoginSection />
    </Container>
  );
};

export default LoginPage;

import { Container } from "@mui/material";
import React from "react";
import { SignupSection } from "../../features/auth/SignupSection";

const SignupPage = () => {
  return (
    <Container className="flex-center" sx={{ width: "100%" }}>
      <SignupSection />
    </Container>
  );
};

export default SignupPage;

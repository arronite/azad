import { Box } from "@mui/material";
import React from "react";
import SignupFormTitles from "./SignupFormTitles";
import SignupForm from "./SignupForm";

export const SignupSection = () => {
  return (
    <Box
      className="flex-center"
      justifyContent={"space-between"}
      flexDirection={"column"}
      width={"100%"}
      height={"100%"}
      px={{ sm: "1rem", md: "2rem" }}
    >
      <SignupFormTitles />

      <SignupForm />
    </Box>
  );
};

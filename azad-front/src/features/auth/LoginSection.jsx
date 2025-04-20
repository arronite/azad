import { Box } from "@mui/material";
import React from "react";
import LoginFormTitles from "./LoginFormTitles";
import LoginForm from "./LoginForm";

export const LoginSection = () => {
  return (
    <Box
      className="flex-center"
      justifyContent={"space-between"}
      flexDirection={"column"}
      width={"100%"}
      p={{ sm: "1rem", md: "2rem" }}
    >
      <LoginFormTitles />

      <LoginForm />
    </Box>
  );
};

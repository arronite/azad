import { Box, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AzadLogo from "../../features/auth/AzadLogo";

const AuthPage = () => {
  return (
    <Stack className="appear" height={"100vh"} direction="flex">
      <Stack width={"50%"} sx={{ overflowY: "auto" }}>
        <Outlet />
      </Stack>

      <Stack direction={"row"} width={"50%"}>
        <AzadLogo />
      </Stack>
    </Stack>
  );
};

export default AuthPage;

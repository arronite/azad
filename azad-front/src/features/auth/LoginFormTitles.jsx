import { Typography } from "@mui/material";
import React from "react";

const LoginFormTitles = () => {
  return (
    <>
      <Typography
        variant="h5"
        fontWeight={700}
        py={"2rem"}
        color="text.contrastText"
      >
        ورود به سایت
      </Typography>

      <Typography variant="h5" fontWeight={700} color="text.main">
        سامانه مدیریت پایان نامه
      </Typography>
    </>
  );
};

export default LoginFormTitles;

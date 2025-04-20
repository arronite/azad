import { Typography } from "@mui/material";
import React from "react";

const SignupFormTitles = () => {
  return (
    <>
      <Typography
        variant="h5"
        fontWeight={700}
        py={"2rem"}
        color="text.contrastText"
      >
        ثبت نام
      </Typography>

      <Typography variant="h5" fontWeight={700} color="text.main">
        سامانه مدیریت پایان نامه
      </Typography>
    </>
  );
};

export default SignupFormTitles;

import { CssBaseline } from "@mui/material";
import React from "react";

import "../shared/styles/index.css";
import { useAxiosInterceptor } from "../shared/utils/axiosInterceptor";

const Providers = ({ children }) => {
  useAxiosInterceptor();
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};

export default Providers;

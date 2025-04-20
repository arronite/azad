import { Box, Typography } from "@mui/material";
import React from "react";

const AzadLogo = () => {
  return (
    <Box
      className="flex-center"
      justifyContent={"space-between"}
      flexDirection="column"
      width="100%"
      borderRadius={"0 5rem 5rem 0"}
      px={{ xs: 2, sm: 4 }}
      py={{ xs: 2, sm: 3 }}
      sx={{ backgroundColor: "background.paper" }}
    >
      <Typography
        variant="h6"
        textAlign="center"
        mb={2}
        sx={{ fontWeight: "bold" }}
      >
        سامانه ارائه‌های دانشجویی
      </Typography>

      <Box
        width="100%"
        maxWidth={400}
        component="img"
        src="/azad-logo.png"
        alt="Azad University Logo"
        sx={{ objectFit: "contain", width: "100%", height: "auto" }}
      />

      <Typography mt={"2rem"} variant="subtitle2" fontWeight={200}>
        کلیه حقوق این وب‌سایت متعلق به دانشگاه آزاد اسلامی می‌باشد
      </Typography>
    </Box>
  );
};

export default AzadLogo;

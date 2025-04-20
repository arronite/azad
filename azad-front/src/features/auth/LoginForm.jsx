import React from "react";
import { Input } from "../../shared/components/TextField";
import { Formik, Form } from "formik";
import { MainButton } from "../../shared/components/Button";
import { Box, Stack, Typography } from "@mui/material";
import { LoginSchema } from "../../shared/utils/loginValidation";
import { requestHandler } from "../../shared/utils/RequestHanlder";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ serial: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={async (values, actions) => {
        try {
          const response = await requestHandler.login(values);
        } catch (error) {
          console.error(error);
        } finally {
          actions.setSubmitting(false);
        }
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        errors,
        touched,
        isSubmitting,
      }) => (
        <Form style={{ width: "100%" }}>
          <Box
            className="flex-center"
            width="100%"
            flexDirection="column"
            justifyContent="space-between"
            gap="2rem"
            p={{ sx: "1rem", md: "2rem" }}
          >
            <Stack gap={"1rem"} width="100%">
              <Box>
                <Typography m="0.5rem" color="info.main">
                  شماره ورودی
                </Typography>
                <Input
                  name="serial"
                  fullWidth
                  value={values.serial}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.serial && Boolean(errors.serial)}
                  helperText={touched.serial && errors.serial}
                />
              </Box>
              <Box>
                <Typography m="0.5rem" color="info.main">
                  رمز عبور
                </Typography>
                <Input
                  name="password"
                  type="password"
                  fullWidth
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Box>
            </Stack>

            <Stack my="2rem" gap="1rem">
              <MainButton
                type="submit"
                sx={{ minWidth: "10rem" }}
                variant="contained"
                disabled={isSubmitting}
              >
                <Typography
                  p="0.5rem"
                  color="text.secondary"
                  variant="h6"
                  fontWeight={600}
                >
                  ورود به سامانه
                </Typography>
              </MainButton>

              <Stack textAlign="center">
                <Typography
                  variant="caption"
                  color="text.main"
                  fontWeight={600}
                >
                  رمز عبور خود را فراموش کردید؟
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

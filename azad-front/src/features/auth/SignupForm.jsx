import React from "react";
import { Input } from "../../shared/components/TextField";
import { Formik, Form } from "formik";
import { MainButton } from "../../shared/components/Button";
import { Box, Stack, Typography } from "@mui/material";
import { SignupSchema } from "../../shared/utils/signupValidation";
import { requestHandler } from "../../shared/utils/RequestHanlder";

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        phone: "",
        email: "",
        serial: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values, actions) => {
        try {
          const { confirmPassword, ...rest } = values;
          requestHandler.signup(rest);
          // Handle success
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
            gap="0.25rem"
            p={{ sx: "1rem", md: "2rem" }}
          >
            {/* Name and Lastname */}
            <Stack direction={{ xs: "column", md: "row" }} gap={2} width="100%">
              <Box flex={1}>
                <Typography m="0.5rem" color="info.main">
                  نام
                </Typography>
                <Input
                  name="name"
                  fullWidth
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
              </Box>

              <Box flex={1}>
                <Typography m="0.5rem" color="info.main">
                  نام خانوادگی
                </Typography>
                <Input
                  name="lastname"
                  fullWidth
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastname && Boolean(errors.lastname)}
                  helperText={touched.lastname && errors.lastname}
                />
              </Box>
            </Stack>

            {/* Phone and Email */}
            <Stack direction={{ xs: "column", md: "row" }} gap={2} width="100%">
              <Box flex={1}>
                <Typography m="0.5rem" color="info.main">
                  شماره تلفن
                </Typography>
                <Input
                  name="phone"
                  fullWidth
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
              </Box>

              <Box flex={1}>
                <Typography m="0.5rem" color="info.main">
                  ایمیل
                </Typography>
                <Input
                  name="email"
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Box>
            </Stack>

            {/* Serial */}
            <Box width="100%">
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

            {/* Password and Confirm Password */}
            <Stack direction={{ xs: "column", md: "row" }} gap={2} width="100%">
              <Box flex={1}>
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

              <Box flex={1}>
                <Typography m="0.5rem" color="info.main">
                  تکرار رمز عبور
                </Typography>
                <Input
                  name="confirmPassword"
                  type="password"
                  fullWidth
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.confirmPassword && Boolean(errors.confirmPassword)
                  }
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
              </Box>
            </Stack>

            {/* Submit Button */}
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
                  ثبت نام
                </Typography>
              </MainButton>
            </Stack>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;

import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  serial: Yup.string().required("وارد کردن شماره ورودی الزامی است"),
  password: Yup.string().required("وارد کردن رمز عبور الزامی است"),
});

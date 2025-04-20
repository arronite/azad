import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "نام باید حداقل ۲ حرف باشد")
    .max(50, "نام نباید بیشتر از ۵۰ حرف باشد")
    .required("نام الزامی است"),

  lastname: Yup.string()
    .min(2, "نام خانوادگی باید حداقل ۲ حرف باشد")
    .max(50, "نام خانوادگی نباید بیشتر از ۵۰ حرف باشد")
    .required("نام خانوادگی الزامی است"),

  phone: Yup.string()
    .matches(/^\+?\d{10,15}$/, "شماره تلفن معتبر نیست")
    .required("شماره تلفن الزامی است"),

  email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),

  serial: Yup.string().required("شماره ورودی الزامی است"),

  password: Yup.string()
    .min(6, "رمز عبور باید حداقل ۶ حرف باشد")
    .required("رمز عبور الزامی است"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "رمز عبور با تکرار آن مطابقت ندارد")
    .required("تکرار رمز عبور الزامی است"),
});

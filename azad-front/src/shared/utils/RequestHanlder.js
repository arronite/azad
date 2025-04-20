import axiosInstance from "./axiosInstance";

export const requestHandler = {
  async login(values) {
    const response = await axiosInstance.post("api/auth/login", values);
    return response.data.accessToken;
  },

  async signup(values) {
    const { phone, ...rest } = values;

    const formattedPhone = phone.replace(/^0/, "+98");
    const interceptedValue = { phone: formattedPhone, ...rest };

    const response = await axiosInstance.post(
      "api/auth/signup",
      interceptedValue,
    );
    return response.data;
  },
};

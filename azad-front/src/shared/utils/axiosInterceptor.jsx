// hooks/useAxiosInterceptor.ts
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import axiosInstance from "./axiosInstance";

export const useAxiosInterceptor = () => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          if (error.response.status === 401) {
            enqueueSnackbar("Unauthorized! Please log in again.", {
              variant: "error",
            });
          } else if (error.response.status === 404) {
            enqueueSnackbar(`اطلاعات نادرست است.`, {
              variant: "error",
            });
          }
        } else {
          enqueueSnackbar("Network error or server is down.", {
            variant: "error",
          });
        }

        return Promise.reject(error);
      },
    );

    return () => {
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [enqueueSnackbar]);
};

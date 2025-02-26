import { toast, ToastOptions } from "react-toastify";

interface NotificationOptions extends ToastOptions {
  message: string;
}

export function useNotifications() {
  const showSuccess = (options: NotificationOptions) => {
    const { message, ...rest } = options;
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...rest,
    });
  };

  const showError = (options: NotificationOptions) => {
    const { message, ...rest } = options;
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...rest,
    });
  };

  const showWarning = (options: NotificationOptions) => {
    const { message, ...rest } = options;
    toast.warning(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...rest,
    });
  };

  const showInfo = (options: NotificationOptions) => {
    const { message, ...rest } = options;
    toast.info(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...rest,
    });
  };

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };
}

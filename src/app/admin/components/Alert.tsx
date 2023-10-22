import { toast } from "react-toastify";

export function AlertError(error: any, msg: String) {
  return toast(msg, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    type: error,
  });
}

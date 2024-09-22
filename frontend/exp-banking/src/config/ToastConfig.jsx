import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastConfig = () => {
  return (
    <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss={false}
    draggable={false}
    pauseOnHover={false}
    theme="colored"
    transition={Slide}
    />
  )
}

export default ToastConfig

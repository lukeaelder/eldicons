import { ToastContainer, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Transition = cssTransition({
  enter: 'slide-in-left',
  exit: 'slide-out-bottom',
});

const Notifications = () => {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={2500}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover={false}
      pauseOnFocusLoss={false}
      transition={Transition}
      limit={1}
    />
  );
};

export default Notifications;

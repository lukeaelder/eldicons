import { Toaster, resolveValue } from 'react-hot-toast';

const Notifications = () => {
  return (
    <Toaster toastOptions={{duration: 2000, }}>
      {(t) => (
        <div
        className={`transition ${t.visible ? 'opacity-1' : 'opacity-0 -translate-y-1'}`}
        >
          {resolveValue(t.message, t)}
        </div>
      )}
    </Toaster>
  );
};

export default Notifications;

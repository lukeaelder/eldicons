import Navbar from './Navbar';
import Footer from './Footer';
import Notifications from './Notifications';

export default function Layout({ children }) {
  return (
    <div className='relative min-h-screen'>
      <Navbar />
      <main className='px-[clamp(16px,3vw,32px)] pb-32 font-Poppins dark:bg-slate-900'>
        {children}
      </main>
      <Footer />
      <Notifications />
    </div>
  );
}

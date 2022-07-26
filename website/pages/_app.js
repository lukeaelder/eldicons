import { SharedStateProvider } from '../context/state';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SharedStateProvider>
      <Component {...pageProps} />{' '}
    </SharedStateProvider>
  );
}

export default MyApp;

import Layout from '../components/Layout.js';
import { SharedStateProvider } from '../context/state.js';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SharedStateProvider>
      <Layout>
        <Component {...pageProps} />{' '}
      </Layout>
    </SharedStateProvider>
  );
}

export default MyApp;

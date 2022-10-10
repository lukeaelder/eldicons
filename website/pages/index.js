import IconGrid from '../components/IconGrid';
import Search from '../components/Search';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>eldicons</title>
      </Head>
      <Header />
      <Search />
      <IconGrid />
      <Menu />
    </>
  );
};

export default Index;

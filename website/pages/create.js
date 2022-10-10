import Head from 'next/head';
import CreateMenu from '../components/create/CreateMenu';
import Grid from '../components/create/Grid';
import List from '../components/create/List';
import Menu from '../components/create/Menu';
import PathInput from '../components/create/PathInput';
import SaveButtons from '../components/create/SaveButtons';

const Index = () => {
  return (
    <>
      <Head>
        <title>eldicons</title>
      </Head>
      <div className='relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-3 md:gap-4 pt-4 md:flex-row md:items-start xl:max-h-[43rem] lg:max-h-[39rem] md:max-h-[35rem]'>
        <div className='w-full max-w-sm lg:max-w-md xl:max-w-lg'>
          <Menu />
          <Grid />
          <PathInput />
        </div>
        <div className='flex w-full max-w-sm flex-col justify-items-stretch md:place-self-stretch lg:max-w-md xl:max-w-lg'>
          <CreateMenu />
          <List />
          <SaveButtons />
        </div>
      </div>
    </>
  );
};

export default Index;

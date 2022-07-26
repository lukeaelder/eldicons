import Navbar from './Navbar';
import dataset from '../context/dataset';

const Header = () => {
  return (
    <header className="flex flex-col items-center">
      <Navbar />
      <div className="py-[80px] text-center">
        <h1 className="mb-[15px] px-[10px] text-3xl font-[600] tracking-wide text-neutral-900 lg:text-4xl">
          {dataset.length} SVG Icons
        </h1>
        <h2 className="px-[30px] text-lg font-[400] tracking-wide text-neutral-500">
          Each icon is designed on a 24x24 grid for simplicity, consitency, and readability on your
          website or app.
        </h2>
      </div>
    </header>
  );
};

export default Header;

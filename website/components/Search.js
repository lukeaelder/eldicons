import { useRef, useState, useEffect } from 'react';
import { useSharedState } from '../context/state';
import Fuse from 'fuse.js';
import Settings from './Settings';

const Search = () => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const [state, setState] = useSharedState();

  const fuseOptions = {
    ignoreLocation: false,
    threshold: 0.18,
    keys: ['tags', 'name', 'category'],
  };
  const fuse = new Fuse(state.icons, fuseOptions);

  const inputSearch = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    handleSearch(e.target.value);
  };

  const handleSearch = (e) => {
    let res = [];

    if (e !== '' && state.iconSettings.category === 'All') {
      res = fuse.search(e);
    }
    if (
      e === '' &&
      state.iconSettings.category !== 'All' &&
      state.iconSettings.category !== 'Favorites'
    ) {
      res = fuse.search({
        category: state.iconSettings.category,
      });
    }
    if (
      e !== '' &&
      state.iconSettings.category !== 'All' &&
      state.iconSettings.category !== 'Favorites'
    ) {
      res = fuse.search({
        $and: [
          { category: state.iconSettings.category },
          { $or: [{ tags: e }, { name: e }, { category: e }] },
        ],
      });
    }
    if (e === '' && state.iconSettings.category === 'Favorites') {
      const curFavs = localStorage.getItem('favs');
      const initialValue = curFavs ? JSON.parse(curFavs) : [];
      const names = [];
      initialValue.map((e, i) => names.push({ name: e }));
      res = fuse.search({
        $or: [...names],
      });
      res = res.filter((icon) => {
        return initialValue.includes(icon.item.name);
      });
    }
    if (e !== '' && state.iconSettings.category === 'Favorites') {
      const curFavs = localStorage.getItem('favs');
      const initialValue = curFavs ? JSON.parse(curFavs) : [];
      const names = [];
      initialValue.map((e, i) => names.push({ name: e }));
      res = fuse.search({
        $and: [{ name: e }, { $or: [...names] }],
      });
      res = res.filter((icon) => {
        return initialValue.includes(icon.item.name);
      });
    }

    Object.entries(res).map((e, i) => {
      res[i] = e[1].item;
    });

    if (e === '' && state.iconSettings.category === 'All') {
      res = [...state.icons];
    }

    setState((prev) => ({
      ...prev,
      searchResults: res,
    }));
  };

  useEffect(() => {
    handleSearch(input);
  }, [state.iconSettings.category]);

  const handleKeyDown = (e) => {
    if (e.keyCode === 191) {
      e.preventDefault();
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className='sticky top-0 z-10 mx-auto mb-10 flex max-w-7xl flex-col items-center justify-center before:absolute before:top-0 before:-left-[5%] before:z-0  before:h-1/2 before:w-[110%] before:bg-white before:content-[""] after:absolute
    after:-left-[5%] after:top-1/2 after:h-1/2 after:w-[110%] after:bg-gradient-to-b after:from-white after:to-transparent after:content-[""] before:dark:bg-slate-900 after:dark:from-slate-900 after:dark:to-transparent'
    >
      <Settings />
      <div className='z-10 w-full rounded-lg shadow-md shadow-slate-900/10 dark:shadow-gray-900'>
        <input
          ref={inputRef}
          name='Search'
          value={input}
          onChange={(e) => inputSearch(e)}
          placeholder={`Search ${state.searchResults.length} icons (Press "/" to Focus)`}
          onFocus={(e) => (e.target.placeholder = 'Search')}
          onBlur={(e) =>
            (e.target.placeholder = `Search ${state.searchResults.length} icons (Press "/" to Focus)`)
          }
          className='w-full rounded-lg border-[1px] border-slate-300 bg-white py-[.875rem] px-6 shadow-[0_0_0_0px] shadow-indigo-500/0 outline-none outline-2 transition hover:border-slate-400 focus:border-indigo-500 focus:shadow-[0_0_0_4px] focus:shadow-indigo-500/30 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:border-slate-500 dark:focus:border-indigo-500'
        ></input>
      </div>
    </div>
  );
};

export default Search;

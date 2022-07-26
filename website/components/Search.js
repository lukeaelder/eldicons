import { useRef, useState, useEffect } from 'react';
import { useSharedState } from '../context/state';
import Fuse from 'fuse.js';
import dataset from '../context/dataset';
import Settings from './Settings';

const Search = () => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const [state, setState] = useSharedState();
  const options = {
    ignoreLocation: true,
    threshold: 0.2,
    keys: ['tags', 'name', 'category'],
  };
  const fuse = new Fuse(dataset, options);

  const handleSearch = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    const res = fuse.search(e.target.value);
    const finalRes = [];
    if (res.length) {
      res.forEach((e) => {
        finalRes.push(e.item);
      });
      setState((prev) => ({ ...prev, searchResults: finalRes }));
    } else if (e.target.value.length === 0) {
      setState((prev) => ({ ...prev, searchResults: [] }));
    } else {
      setState((prev) => ({ ...prev, searchResults: null }));
    }
  };

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
    <div className="sticky top-0 z-[10] mb-[40px] flex flex-col items-center justify-center bg-slate-50">
      <Settings />
      <input
        ref={inputRef}
        name="Search"
        value={input}
        onChange={(e) => handleSearch(e)}
        placeholder={`Search ${dataset.length} icons (Press "/" to Focus)`}
        onFocus={(e) => (e.target.placeholder = 'Search')}
        onBlur={(e) => (e.target.placeholder = 'Search (Press "/" to Focus)')}
        className="h-[60px] w-full rounded border-[1px] border-slate-300 px-[30px] tracking-wide shadow outline-none transition focus:border-indigo-500"
      ></input>
    </div>
  );
};

export default Search;

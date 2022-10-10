import { useState, useEffect } from 'react';
import { SVGPathData, encodeSVGPath } from 'svg-pathdata';
import { useSharedState } from '../../context/state';

const PathInput = () => {
  const [state, setState] = useSharedState();
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);

  const updateInput = (e) => {
    setInput(e.target.value);
    try {
      const res = new SVGPathData(e.target.value);
      setState((p) => ({ ...p, create: { ...p.create, data: res.commands } }));
      if (error !== null) setError(null);
    } catch (e) {
      const err = e.message;
      setError(err);
    }
  };

  useEffect(() => {
    try {
      let res = encodeSVGPath(state.create.data);
      setInput(res);
    } catch (e) {
      setState((p) => ({ ...p, create: { ...p.create, data: [] } }));
    }
  }, [state.create.data]);

  return (
    <div className='relative mx-auto mt-3 w-full max-w-sm overflow-hidden rounded-lg shadow-[0_0_0_0px] shadow-indigo-500/0 transition focus-within:shadow-[0_0_0_4px] focus-within:shadow-indigo-500/30 dark:bg-slate-800 dark:text-white lg:max-w-md xl:max-w-lg'>
      <textarea
        className='top-0 left-0 h-[6.125rem] w-full resize-none appearance-none rounded-lg border-[1px] border-slate-300 bg-transparent p-3 align-top outline-none transition hover:border-slate-400 focus:!border-indigo-500 dark:border-slate-600 dark:hover:border-slate-500 dark:focus:!border-indigo-500'
        placeholder='Enter a SVG path (d attribute)'
        value={input}
        onChange={(e) => updateInput(e)}
      ></textarea>
      <p className='pointer-events-none absolute top-full py-1 text-sm text-red-600 dark:text-red-400'>
        {error}
      </p>
    </div>
  );
};

export default PathInput;

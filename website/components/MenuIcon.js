import { useSharedState } from '../context/state';

const MenuIcon = ({ menuSettings }) => {
  const [state, setState] = useSharedState();

  return (
    <div className="relative w-fit rounded-[5px] border-[1px] border-slate-300 ">
      <div className="absolute top-0 left-0 h-full w-full">
        <div className="absolute flex h-full w-full justify-between">
          <span className="h-full w-[1px]"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px] bg-slate-50"></span>
          <span className="h-full w-[1px]"></span>
        </div>
        <div className="absolute flex h-full w-full flex-col justify-between">
          <span className="h-[1px] w-full"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full bg-slate-50"></span>
          <span className="h-[1px] w-full"></span>
        </div>
      </div>
      <div className="h-[100px] w-[100px]">
        {state.menuSettings.svg === null ? (
          ''
        ) : (
          <div className="absolute">
            <menuSettings.svg
              size={100}
              stroke={state.iconSettings.stroke}
              color={state.iconSettings.color}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuIcon;

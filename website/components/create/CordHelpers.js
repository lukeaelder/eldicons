import React, { useEffect, useState } from 'react';
import { SVGPathData, encodeSVGPath } from 'svg-pathdata';
import { useSharedState } from '../../context/state';

const CordHelpers = () => {
  const [state, setState] = useSharedState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const res = [];
    const hovering = [...state.create.hovering];
    if (hovering[1] === 'listHover') {
      const helperData = [...state.create.hovering][2].split(/-/u);
      const absData = new SVGPathData(encodeSVGPath(state.create.data)).toAbs().commands;
      const pathData = absData[hovering[0]];
      if (helperData[1] && state.create.hovering.has('showCords')) {
        if (helperData[1].startsWith('x')) {
          res.push(
            <path
              className={`stroke-red-500 stroke-[.2] transition duration-75
              ${
                state.create.hovering.has(`CHC${hovering[0]}-${helperData[1]}`) ? 'block' : 'hidden'
              }`}
              id={`CHC${hovering[0]}-x-${helperData[1]}`}
              d={`M${pathData[helperData[1]]} ${0}L${pathData[helperData[1]]} ${
                pathData['y' + helperData[1].slice(1)]
              }`}
              strokeDasharray='0.5'
            />
          );
        }

        if (helperData[1].startsWith('y')) {
          res.push(
            <path
              className={`stroke-red-500 stroke-[.2] transition duration-75 ${
                state.create.hovering.has(`CHC${hovering[0]}-${helperData[1]}`) ? 'block' : 'hidden'
              }`}
              id={`CHC${hovering[0]}-y-${helperData[1]}`}
              d={`M${0} ${pathData[helperData[1]]}L${pathData['x' + helperData[1].slice(1)]} ${
                pathData[helperData[1]]
              }`}
              strokeDasharray='0.5'
            />
          );
        }
      }
      if (helperData[2] && state.create.hovering.has('showCords')) {
        res.push(
          <path
            className={`stroke-red-500 stroke-[.2] transition duration-75 ${
              state.create.hovering.has(`CHC${hovering[0]}-${helperData[1]}`) ? 'block' : 'hidden'
            }`}
            id={`CH${hovering[0]}-y-${helperData[2]}`}
            d={`M${0} ${pathData[helperData[2]]}L${10} ${pathData[helperData[2]]}`}
            strokeDasharray='0.5'
          />
        );
      }
    }
    setData(res);
  }, [state.create.hovering]);

  return (
    <>
      {data.map((e, i) => (
        <React.Fragment key={i}>{e}</React.Fragment>
      ))}
    </>
  );
};

export default CordHelpers;

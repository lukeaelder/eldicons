import { SVGPathData, encodeSVGPath } from "svg-pathdata";

const getPrevXY = (newData, keyVal) => {
  const newVals = { x: newData[keyVal].x, y: newData[keyVal].y };
  if (newVals.x === undefined) {
    let count = 1;
    while (newData[keyVal - count] && newData[keyVal - count].x === undefined) {
      count--;
    }
    newVals.x = newData[keyVal - count] ? newData[keyVal - count].x : 0;
  }
  if (newVals.y === undefined) {
    let count = 1;
    while (newData[keyVal - count] && newData[keyVal - count].y === undefined) {
      count--;
    }
    newVals.y = newData[keyVal - count] ? newData[keyVal - count].y : 0;
  }
  return newVals;
};

export const deletePath = (curState, keyVal) => {
    const res = [...curState];
    const absData = new SVGPathData(encodeSVGPath(curState))
      .toAbs()
      .normalizeST().commands;
    const prev = getPrevXY(absData, keyVal);
    const next = res[keyVal + 1];
    if (next && next.type === SVGPathData.HORIZ_LINE_TO) {
      if (next.relative === true) {
        next.x += prev.x;
        next.relative = false;
      }
      next.type = 16;
      next.y = prev.y;
      res[keyVal + 1] = next;
    }
    if (next && next.type === SVGPathData.VERT_LINE_TO) {
      if (next.relative === true) {
        next.y += prev.y;
        next.relative = false;
      }
      next.type = 16;
      next.x = prev.x;
      res[keyVal + 1] = next;
    }
    if (
      next &&
      (next.type === SVGPathData.SMOOTH_CURVE_TO || next.type === SVGPathData.SMOOTH_QUAD_TO)
    ) {
      res[keyVal + 1] = absData[keyVal + 1];
    }
    if (next && next.relative === true) {
      res[keyVal + 1] = { ...absData[keyVal + 1] };
    }
    while (res[keyVal - 1] && res[keyVal - 1].type === SVGPathData.MOVE_TO) {
      res.splice(keyVal - 1, 1);
      keyVal--;
    }
    if (next && next.type !== SVGPathData.MOVE_TO) {
      res[keyVal] = {
        type: 2,
        relative: false,
        x: prev.x,
        y: prev.y,
      };
    } else {
      res.splice(keyVal, 1);
      keyVal--;
    }
    while (res[res.length - 1] && res[res.length - 1].type === SVGPathData.MOVE_TO) {
      res.pop();
    }
    if (res.length === 1 && res[0].type === SVGPathData.MOVE_TO) {
      res = [];
    }
    return res;
};

export const arcEllipseCenter = (x1, y1, x2, y2, fa, fs, rx, ry, a) => {
  const phi = (a * Math.PI) / 180;

  const M = [
    [Math.cos(phi), Math.sin(phi)],
    [-Math.sin(phi), Math.cos(phi)],
  ];

  const V = [(x1 - x2) / 2, (y1 - y2) / 2];

  const [x1p, y1p] = [M[0][0] * V[0] + M[0][1] * V[1], M[1][0] * V[0] + M[1][1] * V[1]];

  rx = Math.abs(rx);
  ry = Math.abs(ry);

  const lambda = (x1p * x1p) / (rx * rx) + (y1p * y1p) / (ry * ry);
  if (lambda > 1) {
    rx = Math.sqrt(lambda) * rx;
    ry = Math.sqrt(lambda) * ry;
  }

  const sign = fa === fs ? -1 : 1;

  const co =
    sign *
    Math.sqrt(
      Math.max(rx * rx * ry * ry - rx * rx * y1p * y1p - ry * ry * x1p * x1p, 0) /
        (rx * rx * y1p * y1p + ry * ry * x1p * x1p)
    );

  const V2 = [(rx * y1p) / ry, (-ry * x1p) / rx];
  const Cp = [V2[0] * co, V2[1] * co];

  const M2 = [
    [Math.cos(phi), -Math.sin(phi)],
    [Math.sin(phi), Math.cos(phi)],
  ];
  const V3 = [(x1 + x2) / 2, (y1 + y2) / 2];
  const C = [
    M2[0][0] * Cp[0] + M2[0][1] * Cp[1] + V3[0],
    M2[1][0] * Cp[0] + M2[1][1] * Cp[1] + V3[1],
  ];

  return { x: C[0], y: C[1] };
};

export const pointCircle = (center = { x, y }, r, a) => {
  const phi = (a * Math.PI) / 180;
  return {
    x: center.x + r * Math.cos(phi),
    y: center.y + r * Math.sin(phi),
  };
};
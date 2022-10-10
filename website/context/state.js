import { useState } from 'react';
import { createContainer } from 'react-tracked';
import svgData from './svgData.json';

const generateSvgArray = () => {
  const res = [];
  Object.entries(svgData).forEach((e) => {
    res.push({ name: e[0], ...e[1] });
  });
  return res;
};

const svgArray = generateSvgArray();

const initialState = {
  theme: 'system',
  menuSettings: {
    name: null,
    svg: null,
    path: null,
    tags: [],
    open: false,
  },
  iconSettings: {
    size: 24,
    color: '#000000',
    stroke: 2,
    category: 'All',
  },
  create: {
    user: {
      x: 0,
      y: 0,
      mouseX: 0,
      mouseY: 0,
      mouseDown: false
    },
    settings: {
      snap: true,
      snapAmount: 1,
      mode: 0,
      drawType: 0,
      selectMode: 0
    },
    selected: [null, null, null, 0],
    hovering: new Set(),
    data: []
  },
  icons: svgArray,
  searchResults: svgArray,
};

const useMyState = () => useState(initialState);

export const { Provider: SharedStateProvider, useTracked: useSharedState } =
  createContainer(useMyState);


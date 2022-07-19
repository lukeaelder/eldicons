import { useState } from 'react'
import { createContainer } from 'react-tracked'

const initialState = {
  menuSettings: {
    name: null,
    svg: null,
    tags: [],
    open: false,
  },
  iconSettings: {
    size: 24,
    color: '#000',
    stroke: 2,
  },
  searchResults: [],
}

const useMyState = () => useState(initialState)

export const { Provider: SharedStateProvider, useTracked: useSharedState } =
  createContainer(useMyState)

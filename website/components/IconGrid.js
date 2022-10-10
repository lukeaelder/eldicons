import { useSharedState } from '../context/state';
import Icon from './Icon';
import { List, AutoSizer, WindowScroller } from 'react-virtualized';
import { useEffect, useState } from 'react';

const IconGrid = () => {
  const [state, setState] = useSharedState();
  const [columnCount, setColumnCount] = useState(1);
  const [rowHeight, setRowHeight] = useState(144);

  useEffect(() => {
    const height = parseInt(getComputedStyle(document.documentElement).fontSize) * 9;
    if (height !== 144) {
      setRowHeight(height);
    }
  }, []);

  return (
    <div className='mx-auto w-full max-w-7xl'>
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop }) => (
          <AutoSizer
            disableHeight
            onResize={({ width }) => setColumnCount(Math.floor(width / 150))}
          >
            {({ width }) => (
              <List
                autoHeight
                scrollTop={scrollTop}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                columnCount={columnCount}
                rowCount={
                  state.searchResults === null
                    ? Math.ceil(state.icons.length / columnCount)
                    : state.searchResults.length > 1
                    ? Math.ceil(state.searchResults.length / columnCount)
                    : 1
                }
                style={{ overflowX: 'visible', overflow: 'visible' }}
                height={height}
                width={width}
                rowHeight={rowHeight}
                columnWidth={width / columnCount}
                rowRenderer={({ key, style, index: rowIndex }) => (
                  <div
                    key={key}
                    style={{...style, gridTemplateColumns: `repeat(${columnCount}, 1fr)`}}
                    className='mb-4 grid gap-4'
                  >
                    { state.searchResults.length > 0 ? (
                      state.searchResults
                        .slice(rowIndex * columnCount, rowIndex * columnCount + columnCount)
                        .map((e, i) => {
                          return <Icon data={e} key={e.name} />;
                        })
                    ) : (
                      <div>
                        <p className='font-[500]'>No search results</p>
                      </div>
                    )}
                  </div>
                )}
              ></List>
            )}
          </AutoSizer>
        )}
      </WindowScroller>
    </div>
  );
};

export default IconGrid;

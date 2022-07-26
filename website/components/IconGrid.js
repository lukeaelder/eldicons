import { useSharedState } from '../context/state';
import dataset from '../context/dataset';
import Icon from './Icon';
import { List, AutoSizer, WindowScroller } from 'react-virtualized';
import { useState } from 'react';

const IconGrid = () => {
  const [state, setState] = useSharedState();
  const [columnCount, setColumnCount] = useState(1);

  return (
    <div>
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop, style }) => (
          <AutoSizer
            disableHeight
            onResize={({ width }) => setColumnCount(Math.floor(width / 155))}
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
                    ? 1
                    : state.searchResults.length > 0
                    ? Math.ceil(state.searchResults.length / columnCount)
                    : Math.ceil(dataset.length / columnCount)
                }
                height={height}
                width={width}
                rowHeight={155}
                columnWidth={width / columnCount}
                rowRenderer={({ key, style, index: rowIndex }) => (
                  <div
                    key={key}
                    style={{
                      ...style,
                      display: 'grid',
                      gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
                    }}
                    className="gap-[5px]"
                  >
                    {state.searchResults === null ? (
                      <div>
                        <p className="font-[500]">No search results</p>
                      </div>
                    ) : state.searchResults.length > 0 ? (
                      Array.from({ length: columnCount }, (value, columnIndex) => {
                        const icon = state.searchResults[rowIndex * columnCount + columnIndex];

                        if (!icon) {
                          return null;
                        }

                        return <Icon data={icon} key={icon.name} />;
                      })
                    ) : (
                      Array.from({ length: columnCount }, (value, columnIndex) => {
                        const icon = dataset[rowIndex * columnCount + columnIndex];

                        if (!icon) {
                          return null;
                        }

                        return <Icon data={icon} key={icon.name} />;
                      })
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

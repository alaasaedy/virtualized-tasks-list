import React, { useState, useMemo } from 'react';
import { throttle } from 'lodash';
import { useElementSize } from '../hooks';
import './styles.css';

const bufferedItems = 2;

const Window = ({ rowHeight, children, gap = 20 }) => {
  const [containerRef, { height: containerHeight }] = useElementSize();
  const [scrollPosition, setScrollPosition] = useState(0);

  // get the children to be renderd
  const visibleChildren = useMemo(() => {
    const startIndex = Math.max(
      Math.floor(scrollPosition / rowHeight) - bufferedItems,
      0
    );
    const endIndex = Math.min(
      Math.ceil((scrollPosition + containerHeight) / rowHeight - 1) +
        bufferedItems,
      children.length - 1
    );

    return children.slice(startIndex, endIndex + 1).map((child, index) =>
      React.cloneElement(child, {
        style: {
          position: 'absolute',
          top: (startIndex + index) * rowHeight + index * gap,
          height: rowHeight,
          left: 0,
          right: 0,
          // lineHeight: `${rowHeight}px`,
        },
      })
    );
  }, [children, containerHeight, rowHeight, scrollPosition, gap]);

  const onScroll = useMemo(
    () =>
      throttle(
        function (e) {
          setScrollPosition(e.target.scrollTop);
        },
        50,
        { leading: false }
      ),
    []
  );

  return (
    <div
      onScroll={onScroll}
      style={{
        overflowY: 'scroll',
        position: 'relative',
      }}
      ref={containerRef}
      className='container'
    >
      {visibleChildren}
    </div>
  );
};

export default Window;

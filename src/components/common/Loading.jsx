import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="loading">
      <LoadingBar
        style={{ backgroundColor: 'red', height: '5px' }}
        updateTime={100}
        maxProgress={95}
        progressIncrease={10}
      />
    </div>
  );
}

export default Loading;

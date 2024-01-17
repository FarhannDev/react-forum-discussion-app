import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="loading">
      <LoadingBar
        updateTime={100}
        maxProgress={95}
        progressIncrease={10}
        showFastActions
      />
    </div>
  );
}

export default Loading;

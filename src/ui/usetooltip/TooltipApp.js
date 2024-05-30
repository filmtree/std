import React from 'react';
import Tooltip from './Tooltip';

const TooltipApp = () => {
  return (
    <div style={{ padding: '50px' }}>
      <Tooltip content="This is a tooltip!">
        <button>Hover over me</button>
      </Tooltip>
    </div>
  );
};

export default TooltipApp;

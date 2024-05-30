import React from 'react';
import useTooltip from '../../lib/UseTooltip';
import './Tooltip.css'; // 스타일은 필요에 따라 추가하세요.

const Tooltip = ({ children, content }) => {
    
  const { visible, showTooltip, hideTooltip, tooltipRef, targetRef } = useTooltip();

  return (
    <div className="tooltip-container">
      <div
        className="tooltip-target"
        ref={targetRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {children}
      </div>
      {visible && (
        <div className="tooltip-content" ref={tooltipRef}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

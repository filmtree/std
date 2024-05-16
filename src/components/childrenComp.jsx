import React from 'react';

const childrenComp = ({ children }) => {
  return (
    <div>
      {/* slot */}
      { children }
    </div>
  );
};

export default childrenComp;
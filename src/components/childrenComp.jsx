import React from 'react';

const ChildrenComp = ({ children }) => {
  return (
    <div>
      {/* slot */}
      { children }
    </div>
  );
};

export default ChildrenComp;
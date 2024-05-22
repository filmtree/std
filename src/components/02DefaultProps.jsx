import React from 'react';
import PropTypes from 'prop-types';

const DefaultProps = ({ name }) => {

  /* Pros 기본값 설정 */
  DefaultProps.defaultProps = {
    name : 'default',
  }

  /* Prop Type 설정 */
  DefaultProps.propTypes = {
    name: PropTypes.string.isRequired // isRequired - 필수 입력
  };

  return (
    <div>
      {/* Props */}
      { name }
    </div>
  );
};

export default DefaultProps;
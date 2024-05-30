import { useState, useRef, useEffect } from 'react';

const useTooltip = () => {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef(null);
  const targetRef = useRef(null);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);  

  useEffect(() => {
    /* Mobile 환경일 경우 마우스 오버가 없기 때문에 바탕화면 클릭으로 닫는 기능 추가 */
    const handleClickOutside = (event) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target) &&
        targetRef.current &&
        !targetRef.current.contains(event.target)
      ) {
        hideTooltip();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return {
    visible,
    showTooltip,
    hideTooltip,
    tooltipRef,
    targetRef,
  };
};

export default useTooltip;

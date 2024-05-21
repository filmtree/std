// import { useEffect, useRef } from 'react';

// const useOutsideClick = (callback) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const handleClick = (event) => {
        // ref.current가 존재하고 (ref.current가 null이 아님)
        // event.target이 ref.current 요소의 자식 요소가 아닌 경우 (ref.current.contains(event.target)가 false인 경우)
//       if (ref.current && !ref.current.contains(event.target)) {
//         callback();
//       }
//     };

//     document.addEventListener('mousedown', handleClick);

//     return () => {
//       document.removeEventListener('mousedown', handleClick);
//     };
//   }, [ref, callback]);

//   return ref;
// };

// export default useOutsideClick;

import { useEffect, useRef } from 'react';

const useOutsideClick = (callback) => {
  const callbackRef = useRef(callback); // 콜백 참조 저장
  callbackRef.current = callback;

  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      // ref.current가 존재하고 (ref.current가 null이 아님)
      // event.target이 ref.current 요소의 자식 요소가 아닌 경우 (ref.current.contains(event.target)가 false인 경우)
      if (ref.current && !ref.current.contains(event.target)) {
        callbackRef.current(); // 현재 콜백 참조 사용
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []); // 의존성 배열에서 ref와 callback 제거

  return ref;
};

export default useOutsideClick;

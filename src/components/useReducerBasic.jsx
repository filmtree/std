import React, { useReducer } from 'react';

// useReducer를 사용했을 때의 가장 큰 장점은 
// 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 점.
function reducer (state, action) {   // action.type에 따라 다른 작업 수행   
  switch (action.type) {     
    case 'INCREMENT': // action type
      return { value: state.value + 1 }; // action  
    case 'DECREMENT': // action type 
      return { value: state.value - 1 }; // action
    default:       // 아무것도 해당되지 않을 때 기존 상태 반환       
      return state; // default value
  } 
}

// action 인수는 dispatch 합수의 인수

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0})

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT'})}> +1 </button>
      <button onClick={() => dispatch({ type: 'DECREMENT'})}> -1 </button>
    </div>
  );
};

export default Counter;
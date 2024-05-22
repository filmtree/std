import React, { useReducer } from 'react';

const initialState = {
  input1: '',
  input2: '',
  input3: '',
  input4: '',
  input5: '',
};

// 이 함수는 현재 상태와 액션 객체를 받아 새로운 상태를 반환합니다. 
// UPDATE_INPUT 액션을 처리하여 해당 input 필드의 값을 업데이트
const reducer = (state, action) => {
  // action Type 케이스별 이벤트
  switch (action.type) {
    case 'UPDATE_INPUT':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};

const ExampleComponent = () => {
  // useReducer() 훅을 사용하여 inputValues 상태와 dispatch 함수를 얻습니다
  const [inputValues, dispatch] = useReducer(reducer, initialState); // useReducer(reducer함수, 초기값)

  const handleInputChange = (e) => {
    // dispatch 함수를 호출하여 UPDATE_INPUT 액션을 발생시킵니다. 
    // 이때 e.target.name과 e.target.value를 payload로 전달
    dispatch({
      type: 'UPDATE_INPUT',
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  return (
    <div>
      <input
        type="text"
        name="input1"
        value={inputValues.input1}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="input2"
        value={inputValues.input2}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="input3"
        value={inputValues.input3}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="input4"
        value={inputValues.input4}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="input5"
        value={inputValues.input5}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ExampleComponent;

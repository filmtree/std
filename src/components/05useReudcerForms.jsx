import React, { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name] : action.value
    // action 인수는 dispatch 합수의 인수
    // action.name === e.target.name
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  })
  const { name, nickname } = state;

  const onChange = e => {
    // dispatch 합수의 인수가 reducer 함수의 action이 된다. 
    // dispatch(action)
    // action은 어떤 값도 사용 가능.(문자열, 숫자, 객체)
    dispatch(e.target) 
  }

  return (
    <div>
      <div>
        <input name='name' value={name} onChange={onChange} />
        <input name='nickname' value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Form;
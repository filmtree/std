import React, { useState, useMemo, useCallback } from "react";

const getAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = useMemo(e => {
    setNumber(e.target.value);
  }, []); 
  // [] 빈배열 : 컴포넌트가 처음 렌더링 될 때 만들었던 함수를 계속 재사용

  const onInsert = useCallback(() => {
    setList(list.concat(parseInt(number)));
    setNumber("");
  }, [list, number]); // number 혹은 list가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list])

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button type="button" onClick={onInsert}>
        추가
      </button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        평군: {avg}
      </div>
    </div>
  );
};

export default Average;

const [number, setNumber] = useState(0);
// prevNumbers는 현재 number 값을 가리킵니다.
const onIncrease = useCallback(() => setNumber((prevNumber) => prevNumber + 1), []);

// setNumber(number+1)을 하는 것이 아니라, 위 코드처럼 어떻게 업데이트할지 정의해 주는 
// 업데이트 함수를 넣어 줍니다. 그러면 useCallback을 사용할 때 두 번째 파라미터로 넣는 배열에 number를 넣지 않아도 됩니다.
import {useState, useRef, useCallback} from "react"
import TodoTemplate from "components/TodoTemplate";
import TodoInsert from "components/TodoInsert";
import TodoList from "components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정관리 앱 만들어 보기',
      checked: false,
    }
  ]);

  // 고유값으로 사용될 ID
  // ref 를 사용하여 렌더링 되지 않는 변수 담기
  const nextId = useRef(4);

  /* 기본 방식 : todos 값이 변경될때 마다 onInsert 함수가 다시 렌더링 된다 */
  // props로 전달되는 함수는 useCallBack으로 항상 감싸준다.
  const onInsert = useCallback((value) => {
      const todo = {
        id: nextId.current,
        text: value,
        checked: false,
      };
      setTodos(todos.concat(todo));
      // setTodos(todos => todos.concat(todo)); // 함수방식으로 변경할 때 참조값을 넣어 파라미터를 함수로 변경
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos]
    // [] // 함수형으로 변경하면 빈값으로 변경 / 리렌더링 방지
  );

  /* 기본 방식 : todos 값이 변경될때 마다 onRemove 함수가 다시 렌더링 된다 */
  // const onRemove = useCallback((id) => { 
  //   setTodos(todos.filter(todo => todo.id !== id)) // 파라미터만 작성
  // }, [todos])

  /* setTodos에 파라미터가 아닌 업데이트 함수를 넣어 어떻게 업데이트 할 건지 정해주는 방식 */
  const onRemove = useCallback((id) => { 
    setTodos(todos => todos.filter(todo => todo.id !== id)) // 함수 방식 작성
  }, []) // 함수방식으로 작성하여 todos를 참조하고 있으므로 빈배열을 넣는다. = 리렌더링 방지

  /* setTodos에 파라미터가 아닌 업데이트 함수를 넣어 어떻게 업데이트 할 건지 정해주는 방식 */
  const onToggle = useCallback(id => { 
    setTodos(todos => todos.map(todo => {
      return todo.id === id ? {...todo, checked:!todo.checked} : todo
    })) // 함수 방식 작성
  }, []) // 함수방식으로 작성하여 todos를 참조하고 있으므로 빈배열을 넣는다.

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} ></TodoInsert>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
    </TodoTemplate>
  )
}

export default App;
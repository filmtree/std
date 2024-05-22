import classNames from "classnames";

classNames("one", "two"); // = 'one two' 
classNames('one', { two: true }); // = 'one two' 
classNames('one', { two: false }); // = 'one' 
classNames('one', ['two', 'three']); // = 'one two three'   

const myClass = 'hello'; 
classNames('one', myClass, { myCondition: true }); // = 'one hello myCondition'

const ClassNames = ({ highlighted, theme}) => {
  return (
    <div>
      {/* highlighted가 트루면 highlighted 클래스 적용. theme는 전달받은 내용 그대로 적용. */}
      <div className={classNames('MyComponent', { highlighted }, theme)}>Hello</div>
      {/* classNames를 사용하지 않을 경우 */}
      <div className={`MyComponent ${theme} ${highlighted ? 'highlighted' : ''}`}>Hello2</div>
    </div>
  );
};

export default ClassNames;
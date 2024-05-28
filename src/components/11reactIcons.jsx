import { MdAdd, MdCheckBox } from "react-icons/md";

const ReactIcon = () => {
  return (
    <form className="TodoInsert">

      <input placeholder="할 일을 입력하세요" />
      <MdCheckBox />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default ReactIcon;
import React, { useState } from 'react';

const ExampleComponent = () => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
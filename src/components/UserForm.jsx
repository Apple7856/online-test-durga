import React, { useState } from "react";

const UserForm = ({ setData, isEdit, setIsEdit }) => {
  const [inputFiled, setInputFiled] = useState({});
  const [checkBox, setCheckBox] = useState([]);

  const handleChange = (event) => {
    setInputFiled({ ...inputFiled, [event.target.name]: event.target.value });
  };
  const handleClick = (event) => {
    if (event.target.checked && event.target.name === "radio") {
      setInputFiled({ ...inputFiled, [event.target.name]: event.target.value });
    } else {
      console.log(event.target.checked, event.target.value);
      let checkValue = event.target.checked
        ? [...checkBox, event.target.value]
        : checkBox.filter((item) => item !== event.target.value);
      setCheckBox(checkValue);
      setInputFiled({
        ...inputFiled,
        [event.target.name]: checkValue,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData(inputFiled);
    setIsEdit(false);
  };

  return (
    <div className="form-container">
      <h3 className="heading">Input Form</h3>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-filed">
          <label htmlFor="select-input">Select User</label>
          <select
            name="select-input"
            id="select-input"
            onChange={handleChange}
            required
            disabled={!isEdit}
            className="input"
          >
            <option value="Harry">Harry</option>
            <option value="Rohan">Rohan</option>
            <option value="John">John</option>
            <option value="Menu">Menu</option>
          </select>
        </div>
        <div className="form-filed">
          <label htmlFor="radio-input-1">Radio Input 1</label>
          <input
            type="radio"
            name="radio"
            className="input"
            id="radio-input-1"
            value="radio-input-1"
            onClick={handleClick}
            required
            disabled={!isEdit}
          />
          <label htmlFor="radio-input-2">Radio Input 2</label>
          <input
            type="radio"
            name="radio"
            className="input"
            id="radio-input-2"
            value="radio-input-2"
            onClick={handleClick}
            required
            disabled={!isEdit}
          />
        </div>
        <div className="form-filed">
          <label htmlFor="CheckBox-input-1">CheckBox Input 1</label>
          <input
            type="checkbox"
            className="input"
            id="CheckBox-input-1"
            name="checkbox"
            value="checkbox-input-1"
            onClick={handleClick}
            disabled={!isEdit}
          />
          <label htmlFor="CheckBox-input-2">CheckBox Input 2</label>
          <input
            type="checkbox"
            className="input"
            id="CheckBox-input-2"
            name="checkbox"
            value="checkbox-input-2"
            onClick={handleClick}
            disabled={!isEdit}
          />
        </div>
        <div className="form-filed">
          <label htmlFor="text-input">Text Input</label>
          <input
            type="text"
            className="input"
            name="text-input"
            id="text-input"
            onChange={handleChange}
            placeholder="Text Input"
            required
            disabled={!isEdit}
          />
        </div>
        <div className="form-filed">
          <label htmlFor="number-input">Number Input</label>
          <input
            type="number"
            className="input"
            name="number-input"
            id="number-input"
            placeholder="Number Input"
            onChange={handleChange}
            required
            disabled={!isEdit}
          />
        </div>
        <div className="form-filed">
          <label htmlFor="currency-input">Currency Input</label>
          <input
            type="text"
            className="input"
            name="currency-input"
            id="currency-input"
            placeholder="Currency Input"
            onChange={handleChange}
            required
            disabled={!isEdit}
          />
        </div>
        <div className="form-filed">
          <label htmlFor="password-input">Password Input</label>
          <input
            type="password"
            className="input"
            name="password-input"
            id="password-input"
            onChange={handleChange}
            placeholder="Password Input"
            required
            disabled={!isEdit}
          />
        </div>
        <button className="button" disabled={!isEdit}>
          Click Me
        </button>
      </form>
    </div>
  );
};

export default UserForm;

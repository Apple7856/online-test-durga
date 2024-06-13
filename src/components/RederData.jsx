import React from "react";

const RederData = ({ data, setIsEdit, isEdit }) => {
  return (
    <div className="data-container">
      <h6 className="select-text">select text: {data["select-input"]}</h6>
      <h6 className="radio-text">radio text: {data["radio"]}</h6>
      <h6 className="checkbox-text">
        checkbox text:{" "}
        {data["checkbox"]?.map((item) => (
          <span>{item},</span>
        ))}
      </h6>
      <h6 className="text-text">text: {data["text-input"]}</h6>
      <h6 className="number-text">number text: {data["number-input"]}</h6>
      <h6 className="currency-text">currency text: {data["currency-input"]}</h6>
      <h6 className="password-text">password text: {data["password-input"]}</h6>
      <button
        className="button"
        onClick={() => setIsEdit(true)}
        disabled={isEdit}
      >
        edit
      </button>
    </div>
  );
};

export default RederData;

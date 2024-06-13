import React from "react";

const RederData = ({ data, setIsEdit, isEdit }) => {
  return (
    <div className="data-container">
      {isEdit ? (
        <h6 className="text-data">Please fill the form</h6>
      ) : (
        <div className="data-box">
          <h6 className="text-data">Select Text: {data["select-input"]}</h6>
          <h6 className="text-data">Radio Text: {data["radio"]}</h6>
          <h6 className="text-data">
            Checkbox Text:{" "}
            {data["checkbox"]?.map((item) => (
              <span>{item},</span>
            ))}
          </h6>
          <h6 className="text-data">Text: {data["text-input"]}</h6>
          <h6 className="text-data">Number Text: {data["number-input"]}</h6>
          <h6 className="text-data">Currency Text: {data["currency-input"]}</h6>
          <h6 className="text-data">Password Text: {data["password-input"]}</h6>
          <button
            className="button"
            onClick={() => setIsEdit(true)}
            disabled={isEdit}
          >
            edit
          </button>
        </div>
      )}
    </div>
  );
};

export default RederData;

import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
    setHistoryList([...historyList, e.target.value]);
  };

  return (
    <>
      <input onChange={handleChange} placeholder="Enter Some Text" /><br />
      <p>value: {inputText}</p>
      <ul>
        {
          historyList.map(history => <li>{history}</li>)
        }
      </ul>
    </>
  );
};

export default InputElement;

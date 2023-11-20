/* eslint-disable no-console */
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import InputMask from "../src";

function Input() {
  const ref = useRef(null);
  const [value, setValue] = useState("");

  const onChange = event => {
    setValue(event.target.value);
  };

  return (
    <InputMask
      ref={ref}
      name="login"
      mask="+7 (999) 999-99-99"
      value={value}
      onChange={onChange}
      maskPlaceholder={null}
    />
  );
}

function escapeHtml(unsafe) {
  return `${unsafe}`
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const consoleDiv = document.getElementById("console");
const { log } = console;
console.log = (text, ...rest) => {
  log.apply(console, [text, ...rest]);
  consoleDiv.innerHTML = `${escapeHtml(text)}<br/>${consoleDiv.innerHTML}`;
};

ReactDOM.render(<Input />, document.getElementById("root"));

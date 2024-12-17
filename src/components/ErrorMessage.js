import React from "react";
import "./ErrorMessage.css";

function ErrorMessage({ message }) {
  return <div style={{ color: "red" }}>{message}</div>;
}

export default ErrorMessage;

import React from "react";

const PrimaryButton = ({ className, text, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default PrimaryButton;

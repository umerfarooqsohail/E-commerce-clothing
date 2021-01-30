import React from "react";
import "./Forminput.scss";
const Forminput = ({ handleChange, label, ...othersProps }) => {
    console.log(othersProps.value.length);
  return (
    <div className="signin-form-group">
      <input className="signin-form-input" onChange={handleChange} {...othersProps} />
      {label?(<label
          className={`${othersProps.value.length?"shrink":""} form-input-label`}>
          {label}      
        </label>):null}       




    </div>
  );
};

export default Forminput;

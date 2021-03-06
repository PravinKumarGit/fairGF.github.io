import React from "react";

import Wrapper from "./checkBox.styles";
export default function CheckBox({ ...props }) {
  const {
    title,
    helpToolTip,
    OptionalLabel,
    errorMessage,
    ToolTipText,
    label,
    children,
    checked,
    ...checkboxProps
  } = props;
  const { onClick } = checkboxProps;
  
  return (
    <Wrapper>
      <div className={`checkBox-Component ${errorMessage ? "required" : ""}`}>
        {title && (
          <label className="checkBox-Label">
            {title}
            {helpToolTip && (
              <i className="toolTip-Icon">
                <img src={Image} alt="help icon" />
                {ToolTipText && (
                  <span className="toolTip-Text">{ToolTipText}</span>
                )}
              </i>
            )}
            {OptionalLabel && (
              <label className="checkBox-Label-Optional">optional</label>
            )}
          </label>
        )}
        <input type="checkbox" className="checkBox-Input" checked={checked} onChange={onClick} {...checkboxProps} />
        <div className="checkBox-InformationContainer">
          <div className="checkBox-Message">
            {label}
            {children}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

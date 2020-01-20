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
    inputPorps
  } = props;
  return (
    <Wrapper>
      <div className={`checkBox-Component ${errorMessage ? "required" : null}`}>
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
        {/* <div className="checkBox-Component-Required"> */}
        <input
          id="termsAndPolicy"
          type="checkbox"
          className="checkBox-Input"
          {...inputPorps}
        />
        <div className="checkBox-InformationContainer">
            <div className="checkBox-Message">{label}{children}</div>
        </div>
      </div>
    </Wrapper>
  );
}

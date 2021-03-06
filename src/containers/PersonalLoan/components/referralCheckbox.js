import React from "react";
import CheckBox from "../../../components/uielements/checkBox";
import Wrapper from "./Styles/referralCheckbox.styles";
export default function ReferralCheckBox({ ...props }) {
  const { setFieldValue, ...checkboxProps } = props;
  return (
    <Wrapper>
      <label>
        <CheckBox {...checkboxProps}>
          <span className="label">Referral Consent:</span>
          If we are unable to offer a loan today, we may be able to refer you to
          other credit providers and alternative service providers as described
          in our Privacy Policies, who may be able to offer you an alternative
          finance option. Do you give us approval to do this and agree to us
          sending your contact details, name and financial information to these
          providers?
        </CheckBox>
      </label>
    </Wrapper>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckBox from "../../../components/uielements/checkBox";
import TermsAcceptModal from "./termsAcceptModel";
import Wrapper from "./Styles/termsCheckBox.styles";
export default function TermsCheckBox({ ...props }) {
  const { setFieldValue, ...checkboxProps } = props;

  const [modalTerms, setModalTerms] = useState(false);
  const acceptTerms = () => {
    setModalTerms(false);
    props.setFieldValue(props.name, true);
  };
  return (
    <Wrapper>
      <label>
        <CheckBox {...checkboxProps}>
          I agree to: (1){" "}
          <Link
            to="#"
            onClick={e => {
              e.stopPropagation();
              setModalTerms(!modalTerms);
            }}
            className="pct-show"
          >
            the terms of the Privacy Policy
          </Link>{" "}
          which includes permission for Fair Go Finance to obtain a copy of my
          credit file and as a result of this a credit enquiry may be put on my
          credit record with one or more credit reporting bodies; (2) that all
          communications to me can be sent electronically; and (3) I am
          authorised to provide these personal details.
        </CheckBox>
      </label>
      <TermsAcceptModal
        visible={modalTerms}
        close={() => setModalTerms(!modalTerms)}
        accept={acceptTerms}
      />
    </Wrapper>
  );
}

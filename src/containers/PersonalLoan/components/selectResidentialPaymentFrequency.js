﻿import React from "react";
import Select from "../../../components/uielements/select/select";
import { RESIDENTIAL_PAYMENT_FREQUENCY } from "../../../constants/options";
import { useOptionalSelectManager } from "../../../hooks/useOptionalSelectManager";


const getDefaultSelectValue = () => RESIDENTIAL_PAYMENT_FREQUENCY[0].value;
const getShouldShow = ({residentialStatus}) => ['Renting', 'Mortgage', 'Boarding (with friends/family/relatives)'].includes(residentialStatus);

export default function ResidentialPaymentFrequency(props) {
  const { values, setFieldValue, ...selectProps } = props;
  const { name } = selectProps;
  
  const shouldShow = getShouldShow(values);
  useOptionalSelectManager(
    shouldShow,
    (value) => setFieldValue(name, value),
    getDefaultSelectValue(), 
  );
  
  return (
    <>
      {shouldShow && (
        <Select
          Title="How often do you pay this"
          options={RESIDENTIAL_PAYMENT_FREQUENCY}
          {...selectProps}
        />
      )}
    </>
  );
}

export const __TEST__ = {
  getDefaultSelectValue,
  getShouldShow
};
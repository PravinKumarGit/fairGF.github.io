import React from "react";
import Input from "../../../components/uielements/input";
export default function LastName({ ...props }) {
  return (
    <>
      <Input title="Last Name" placeholder="Last Name" {...props} />
    </>
  );
}

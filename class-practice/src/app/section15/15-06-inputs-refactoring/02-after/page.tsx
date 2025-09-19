"use client";

import { useState } from "react";

export default function InputsRefactoringBeforePage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    content: "",
  });

  const onChangeInputs = (event) => {
    // setInputs({
    //   ...inputs,
    //   [event.target.id]: event.target.value,
    // });

    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <>
      <input id="writer" type="text" onChange={onChangeInputs} />
      <input id="title" type="text" onChange={onChangeInputs} />
      <input id="content" type="text" onChange={onChangeInputs} />
    </>
  );
}

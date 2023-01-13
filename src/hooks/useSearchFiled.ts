import React, { useState } from "react";

export function useSearchFiled() {
  const [input, setInput] = useState<string>("");
  const [confirmInput, setConfirm] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const confimrHandler = () => {
    setConfirm(input);
  };

  return { input, confirmInput, changeHandler, confimrHandler };
}

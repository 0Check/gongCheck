import { KeyboardEvent } from "react";

// onKeyPress={ onKeyPressHandler(() => 엔터를입력할경우실행시킬함수() )}

export const onKeyPressHandler =
  (func: any) => (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      func();
    }
  };

import React from "react";

/**
 * @param input, textarea 태그에서 onChange를 처리하는 메소드
 * 매개변수값으로 setStateAction을 넣어주면된다.
 */

export const onChangeEventHandler =
  (onChangeState: React.Dispatch<React.SetStateAction<string>>) =>
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChangeState(e.currentTarget.value);
    console.log("inputEvent.ts : ", e.currentTarget.value);
  };

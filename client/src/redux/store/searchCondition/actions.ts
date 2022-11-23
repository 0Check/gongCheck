import { store } from "..";

export type AuthActionType =
  | ReturnType<typeof setConditionAge>
  | ReturnType<typeof setConditionGender>
  | ReturnType<typeof setConditionPay>
  | ReturnType<typeof setConditionPersonal>
  | ReturnType<typeof setConditionFamily>

// 타입의 역할 : 파라미터로 들어오는 인자값들의 변수 타입을 정의한다.
type AGE = {
  age: string,
};

type GENDER = {
  gender: string,
};

type PAY = {
  pay: string,
};

type PERSONAL = {
  personal: string[],
};

type FAMILY = {
  family: string[]
};

// 액션 함수의 역할 : 파라미터로 인자값을 받아서 redux의 state값을 어떻게 바꿀지를 작성한다.
export const setConditionAge = (condition: AGE) => {
  return {
    type: "SET_AGE",
    payload: {
      age: condition.age,
    },
  };
};

export const setConditionGender = (condition: GENDER) => {
  return {
    type: "SET_GENDER",
    payload: {
      gender: condition.gender,
    },
  };
};

export const setConditionPay = (condition: PAY) => {
  return {
    type: "SET_PAY",
    payload: {
      pay: condition.pay,

    },
  };
};


export const setConditionPersonal = (condition: PERSONAL) => {
  
  return {
    type: "SET_PERSONAL",
    payload: {
      personal: [...store.getState().searchConditionStore.personal,condition.personal],
      

    },
  };
};

export const setConditionFamily = (condition: FAMILY) => {
  return {
    type: "SET_FAMILY",
    payload: {
      family: [...store.getState().searchConditionStore.family, condition.family]
    },
  };
};


// 외부에서 정의한 액션 함수를 가져온다.
import { Reducer } from "react";
import * as actions from "./actions";


type searchCondition ={
  age: string,
  gender: string,
  pay: string,
  personal: string[],
  family: string[]

}

// 리듀서 역할 1 : state를 정의한다. 실제 사용한 state값들

const searchCondition: searchCondition = {
  age: "",
  gender: "",
  pay: "",
  personal: [],
  family: []
};

// 리듀서 역할 2 : state를 변경시키는 함수를 정의한다.
// 타입스크립트 state하고 액션인데 나중에 해결

export const searchConditionReducer = (state = searchCondition, action: any) => {
  switch (action.type) {
    case "SET_AGE":
      return {
        ...state,
        age: action.payload.age,
      };
    case "SET_GENDER":
      return {
        ...state,
        gender: action.payload.gender,
      };
    case "SET_PAY":
      return {
        ...state,
        pay: action.payload.pay,
      };
    case "SET_PERSONAL":
      return {
        ...state,
        personal: action.payload.personal,
      };
  
    case "SET_FAMILY":
      return {
        ...state,
        family: action.payload.family,
      };

    default:
      return state;
  }
};

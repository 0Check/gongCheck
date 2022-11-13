import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { Box, Modal, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { SetStateAction, useState } from "react";
import { styled as muiStyled } from "@mui/material/styles";

/**
 * Author : Sukyung Lee
 * FileName: SignUpModal.tsx
 * Date: 2022-11-12 03:05:04
 * Description :
 */

interface ISignUpModalTypes {
  isOpenModal: boolean;
  modalToggleHandler: () => void;
}

// 아래 2개는 바깥에서 선언을 해주고 props로 넣어주어야 한다.
// const [isOpenModal, setIsOpenModal] = useState(props.IsOpen);

// const modalToggleHandler = () => {
//   setIsOpenModal((prev) => !prev);
// };

const SignUpModal = (props: ISignUpModalTypes) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerCheckPassword, setRegisterCheckPassword] = useState("");
  const [registerNickname, setRegisterNickname] = useState("");
  const [registerGender, setRegisterGender] = useState("");
  const [registerBirth, setRegisterBirth] = useState("");

  const registerInputHandler = (setState: SetStateAction<any>) => (e: any) => {
    setState(e.currentTarget.value);
  };
  const registerGenderChangeHandler =
    (setState: SetStateAction<any>, value: string) => (e: any) => {
      setState(value);
    };

  const signUpHandler = () => {};

  return (
    <Modal
      open={props.isOpenModal}
      onClose={props.modalToggleHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Main>
        <Title> 회원가입 </Title>
        <TextField
          label="이메일"
          type="email"
          variant="outlined"
          onChange={registerInputHandler(setRegisterEmail)}
        />
        <TextField
          label="비밀번호"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          onChange={registerInputHandler(setRegisterPassword)}
        />
        <TextField
          label="비밀번호 확인"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          onChange={registerInputHandler(setRegisterCheckPassword)}
        />
        <TextField
          label="닉네임"
          type="text"
          variant="outlined"
          onChange={registerInputHandler(setRegisterNickname)}
        />
        <GenderGroup>
          <GenderButton
            variant="outlined"
            onClick={registerGenderChangeHandler(setRegisterGender, "man")}
            style={
              registerGender === "man"
                ? { backgroundColor: "#5999F1", boxShadow: "1px 1px 0px 0px" }
                : {}
            }
          >
            남성
          </GenderButton>
          <GenderButton
            variant="outlined"
            onClick={registerGenderChangeHandler(setRegisterGender, "woman")}
            style={
              registerGender === "woman"
                ? { backgroundColor: "#5999F1", boxShadow: "1px 1px 0px 0px" }
                : {}
            }
          >
            여성
          </GenderButton>
        </GenderGroup>
        <TextField
          label="생년월일"
          type="text"
          variant="outlined"
          onChange={registerInputHandler(setRegisterBirth)}
        />
        <SubmitButtonGroup>
          <Button variant="contained" onClick={() => signUpHandler}>
            회원가입하기
          </Button>
          <Button variant="contained" onClick={props.modalToggleHandler}>
            취소
          </Button>
        </SubmitButtonGroup>
      </Main>
    </Modal>
  );
};
export default SignUpModal;
const Title = styled.div`
  width: 100%;
  min-height: 60px;
  background-color: #6a94cd;
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Main = styled.div`
  padding: 24px 20px;
  display: flex;
  flex-flow: nowrap column;
  gap: 20px;
  width: 400px;
  max-height: calc(100% - 150px);
  position: absolute;
  left: 50%;
  transform: translate(-50%, 100px);
  background: white;
  overflow: scroll;
`;
const SubmitButtonGroup = styled.div`
  display: flex;
  gap: 20px;

  button {
    width: 100%;
    color: white;
  }
  button:nth-of-type(1) {
    background: #6a94cd;
  }
  button:nth-of-type(2) {
    background: #aeaeae;
  }
`;

const GenderGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const GenderButton = styled(Button)`
  width: 100%;
`;

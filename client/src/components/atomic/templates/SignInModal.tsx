import styled from "@emotion/styled";
import { Modal } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { SetStateAction, useState } from "react";
import {
  firebaseAuthService,
  firebaseDbService,
} from "../../../config/firebase";
import { store } from "../../../redux/store";
import { setUserInfo } from "../../../redux/store/auth/actions";
import { KeyboardEvent } from "react";
/**
 * Author : Sukyung Lee
 * FileName: signInModal.tsx
 * Date: 2022-11-12 03:04:29
 * Description :
 */

interface ISignUpModalTypes {
  isOpenModal: boolean;
  modalToggleHandler: () => void;
}

const SignInModal = (props: ISignUpModalTypes) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const registerInputHandler = (setState: SetStateAction<any>) => (e: any) => {
    setState(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      signInHandler();
    }
  };

  const signInHandler = async () => {
    setPersistence(firebaseAuthService, browserSessionPersistence).then(() => {
      signInWithEmailAndPassword(
        firebaseAuthService,
        registerEmail,
        registerPassword
      )
        .then(async (result) => {
          const userData = await getDoc(
            doc(firebaseDbService, "user", result.user.uid)
          );
          if (userData.exists()) {
            store.dispatch(
              setUserInfo({
                uid: result.user.uid,
                email: userData.data().email,
                displayName: userData.data().displayName,
                gender: userData.data().gender,
                birth: userData.data().birth,
              })
            );
            props.modalToggleHandler();
            setRegisterEmail("");
            setRegisterPassword("");
          } else {
            alert("존재하지 않는 이메일 입니다.");
          }
        })
        .catch((error) => {
          alert("뭔가 잘못되었습니다");
          console.log("SignInModal.tsx : ", error);
        });
    });
  };

  return (
    <Modal
      open={props.isOpenModal}
      onClose={props.modalToggleHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Main>
        <Title> 로그인 </Title>
        <TextField
          label="이메일"
          type="email"
          variant="outlined"
          onChange={registerInputHandler(setRegisterEmail)}
          onKeyPress={onKeyPressHandler}
        />
        <TextField
          label="비밀번호"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          onChange={registerInputHandler(setRegisterPassword)}
          onKeyPress={onKeyPressHandler}
        />
        <SubmitButtonGroup>
          <Button variant="contained" onClick={signInHandler}>
            로그인하기
          </Button>
          <Button variant="contained" onClick={props.modalToggleHandler}>
            취소
          </Button>
        </SubmitButtonGroup>
      </Main>
    </Modal>
  );
};
export default SignInModal;

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

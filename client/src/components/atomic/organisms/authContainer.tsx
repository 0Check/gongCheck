import styled from "@emotion/styled";
import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SignInModal from "../templates/SignInModal";
import SignUpModal from "../templates/SignUpModal";
import { RootState } from "../../../redux/store/reducers";
import { store } from "../../../redux/store";
import { setUserInfo } from "../../../redux/store/auth/actions";
import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import {
  firebaseAuthService,
  firebaseDbService,
} from "../../../config/firebase";
/**
 * Author : Sukyung Lee
 * FileName: auth.tsx
 * Date: 2022-11-14 16:06:41
 * Description :
 */
const AuthContainer = () => {
  const [isOpenSignInModal, setIsOpenSignInModal] = useState(false);
  const [isOpenSignUpModal, setIsOpenSignUpModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const authStore = useSelector((state: RootState) => state.authStore);
  const modalSignUpToggleHandler = () => {
    setIsOpenSignUpModal((prev: any) => !prev);
  };

  const modalSignInToggleHandler = () => {
    setIsOpenSignInModal((prev: any) => !prev);
  };
  const LogoutHandler = () => {
    store.dispatch(
      setUserInfo({
        uid: "",
        email: "",
        displayName: "",
        gender: "",
        birth: "",
      })
    );
    firebaseAuthService.signOut();
  };

  useEffect(() => {
    firebaseAuthService.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        const userData = await getDoc(
          doc(firebaseDbService, "user", currentUser?.uid)
        );
        if (userData.exists()) {
          store.dispatch(
            setUserInfo({
              uid: currentUser?.uid,
              email: userData.data().email,
              displayName: userData.data().displayName,
              gender: userData.data().gender,
              birth: userData.data().birth,
            })
          );
        }
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Wrapper>
          <SignUpModal
            isOpenModal={isOpenSignUpModal}
            modalToggleHandler={modalSignUpToggleHandler}
          />
          <SignInModal
            isOpenModal={isOpenSignInModal}
            modalToggleHandler={modalSignInToggleHandler}
          />
          {authStore.displayName === "" && (
            <FlexDiv>
              <Button
                variant="outlined"
                onClick={() => setIsOpenSignInModal(true)}
              >
                로그인
              </Button>
              <Button
                variant="outlined"
                onClick={() => setIsOpenSignUpModal(true)}
              >
                회원가입
              </Button>
            </FlexDiv>
          )}
          {authStore.displayName !== "" && (
            <FlexDiv>
              <Button variant="outlined">{authStore.displayName}님 </Button>
              <Button variant="outlined" onClick={LogoutHandler}>
                로그아웃
              </Button>
            </FlexDiv>
          )}
        </Wrapper>
      )}
    </>
  );
};
export default AuthContainer;
const Wrapper = styled.div`
  display: flex;
  gap: 10px;

  button {
    color: white;
  }
`;
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 100%;
`;
const Spinner = styled.div`
  width: 50px;
  --b: 8px; /* the border thickness */
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(#0000 10%, #f03355) content-box;
  -webkit-mask: repeating-conic-gradient(
      #0000 0deg,
      #000 1deg 20deg,
      #0000 21deg 36deg
    ),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - var(--b) - 1px),
      #000 calc(100% - var(--b))
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: s4 1s infinite steps(10);
  @keyframes s4 {
    to {
      transform: rotate(1turn);
    }
  }
`;

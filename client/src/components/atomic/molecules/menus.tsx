import styled from "@emotion/styled";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { MAIN_COLOR } from "../../../commons/color";
import Text1 from "../atoms/text1";
import SignUpModal from "../templates/SignUpModal";

export default function Menus() {
  const [isOpenSignInModal, setIsOpenSignInModal] = useState(false);
  const [isOpenSignUpModal, setIsOpenSignUpModal] = useState(false);

  const modalSignUpToggleHandler = () => {
    setIsOpenSignUpModal((prev) => !prev);
  };

  return (
    <Wrapper>
      <SignUpModal
        isOpenModal={isOpenSignUpModal}
        modalToggleHandler={modalSignUpToggleHandler}
      />
      <Text1 fontSize="2rem" value="공첵" />
      <AuthButtonGroup>
        <Button variant="outlined" onClick={() => setIsOpenSignInModal(true)}>
          로그인
        </Button>
        <Button variant="outlined" onClick={() => setIsOpenSignUpModal(true)}>
          회원가입
        </Button>
      </AuthButtonGroup>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  height: 80px;
  background-color: ${MAIN_COLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`;
const AuthButtonGroup = styled.div`
  display: flex;
  gap: 10px;

  button {
    color: white;
  }
`;

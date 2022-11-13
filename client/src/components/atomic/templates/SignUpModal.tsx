import styled from "@emotion/styled";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

/**
 * Author : Sukyung Lee
 * FileName: SignUpModal.tsx
 * Date: 2022-11-12 03:05:04
 * Description :
 */
const SignUpModal = () => {
  return (
    <Container>
      <Title> 회원가입 </Title>
      <Main>
        <TextField label="이메일" type="email" variant="outlined" />
        <TextField
          label="비밀번호"
          type="password"
          variant="outlined"
          autoComplete="current-password"
        />
        <TextField label="비밀번호 확인" type="password" variant="outlined" />
        <TextField label="닉네임" type="text" variant="outlined" />
        <TextField label="성별" type="text" variant="outlined" />
        <TextField label="생년월일" type="text" variant="outlined" />
        <ButtonGroup>
          <Button variant="contained">회원가입하기</Button>
          <Button variant="contained">취소</Button>
        </ButtonGroup>
      </Main>
    </Container>
  );
};
export default SignUpModal;
const Container = styled.div`
  width: 320px;
  border: solid black 1px;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 100px);
  z-index: 30;
`;

const Title = styled.div`
  width: 100%;
  height: 60px;
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
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;

  button {
    width: 100%;
    color: white;
  }
  button:nth-child(1) {
    background: #6a94cd;
  }
  button:nth-child(2) {
    background: #aeaeae;
  }
`;

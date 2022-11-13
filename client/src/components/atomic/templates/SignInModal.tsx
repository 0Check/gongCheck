import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
/**
 * Author : Sukyung Lee
 * FileName: signInModal.tsx
 * Date: 2022-11-12 03:04:29
 * Description :
 */
const SignInModal = () => {
  return (
    <Container>
      <Title> 로그인 </Title>
      <Main>
        <TextField label="이메일" type="email" variant="outlined" />
        <TextField
          label="비밀번호"
          type="password"
          variant="outlined"
          autoComplete="current-password"
        />
        <ButtonGroup>
          <Button variant="contained">로그인 하기</Button>
          <Button variant="contained">취소</Button>
        </ButtonGroup>
      </Main>
    </Container>
  );
};
export default SignInModal;
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

import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../redux/store";
import { RootState } from "../redux/store/reducers";
import { setAccessToken, setUserInfo } from "../redux/store/auth";
import Button from "@material-ui/core/Button";

const Test = () => {
  const dispatch = useDispatch();
  const authStore = useSelector((state: RootState) => state.authStore);

  const reduxDispatchExample = () => {
    store.dispatch(
      setUserInfo({
        email: "123",
        role: "123",
        nickname: "123",
      })
    );
    store.dispatch(setAccessToken({ accessToken: "123" }));
  };

  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        onClick={() => reduxDispatchExample()}
      >
        dispatch 버튼
      </Button>
      <div> email : {authStore?.email} </div>
      <div> role : {authStore?.role} </div>
      <div> nickname : {authStore?.nickname} </div>
      <div> accessToken : {store.getState().authStore.accessToken} </div>
    </Container>
  );
};

export default Test;

const Container = styled.div`
  width: 100%;
`;

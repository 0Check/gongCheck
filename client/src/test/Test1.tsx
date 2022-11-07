import styled from "@emotion/styled";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import { firebaseApp } from "../config/firebase";

const Test1 = () => {
  useEffect(() => {
    const test = async () => {
      const db = getFirestore(firebaseApp);
      console.log("_app.tsx : ", db);
      const board = await getDocs(collection(db, "test"));
      const test1 = board.docs.map((i) => i.data());
      console.log("_app.tsx : ", test1);
    };
    test();
  }, []);

  return (
    <Container>
      <div> </div>
      <div> </div>
    </Container>
  );
};
export default Test1;
const Container = styled.div`
  width: 100%;
`;

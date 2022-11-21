import { firebaseApp } from "../config/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export const getBoardDetail = async (boardID: string) => {
  const docRef = doc(db, "board", boardID);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
};

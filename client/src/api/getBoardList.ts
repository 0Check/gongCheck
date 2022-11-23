import { firebaseApp } from "../config/firebase";
import {
  query,
  getFirestore,
  collection,
  getDocs,
  orderBy,
  limit,
  startAt,
} from "firebase/firestore";

const db = getFirestore(firebaseApp);

export const getBoardList = async (pageNum: number) => {
  let arr: any[] = [];
  const listDB = query(
    collection(db, "board"),
    orderBy("createdAt"),
    startAt(pageNum),
    limit(12)
  );

  const docSnap = await getDocs(listDB);

  docSnap.docs.map((el) => {
    arr.push(el.data());
  });

  return arr;
};

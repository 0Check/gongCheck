import { firebaseApp } from "../config/firebase";
import {
  query,
  getFirestore,
  collection,
  getDocs,
  orderBy,
  limit,
  startAt,
  doc,
  getDoc,
} from "firebase/firestore";

const db = getFirestore(firebaseApp);

// [Read] 서비스 리스트 조회하기
export const getServiceList = async (pageNum: number) => {
  let arr: any[] = [];
  const listDB = query(
    collection(db, "serviceList"),
    orderBy("서비스ID"),
    startAt(pageNum),
    limit(12)
  );

  return await getDocs(listDB)
    .then((result) => {
      return Promise.resolve(result.docs.map((el) => el.data()));
    })
    .catch((err) => {
      return Promise.reject("Fail");
    });
};

// [Read] 서비스 디테일 조회하기
export const getServiceDetail = async (serviceID: string) => {
  const docRef = doc(db, "serviceDetail", serviceID);
  return await getDoc(docRef)
    .then((result) => {
      return Promise.resolve(result.data());
    })
    .catch((err) => {
      return Promise.reject("Fail");
    });
};

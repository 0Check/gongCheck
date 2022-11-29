import styled from "@emotion/styled";
import { DocumentData } from "firebase/firestore";
import { constants } from "fs/promises";
import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from "react";
import { getServiceDetail } from "../../../src/api/publicServiceApiService";
import { uuidv4 } from "@firebase/util";

type serviceDetailType = {
  구비서류: string;
  문의처전화번호: string;
  서비스ID: string;
  서비스명: string;
  서비스목적: string;
  선정기준: string;
  소관기관명: string;
  수정일시: string;
  신청기한: string;
  신청방법: string;
  온라인신청사이트URL: string;
  자치법규: string;
  접수기관명: string;
  지원내용: string;
  지원대상: string;
  지원유형: string;
  행정규칙: string;
};

type detailItemDataType = {
  title: string;
  title1: string;
  content1: string;
  title2: string;
  content2: string;
};

export default function ServiceDetail() {
  const router = useRouter();
  const [data, setData] = useState<DocumentData | serviceDetailType>();
  const [detailItemData, setDetailItemData] = useState<
    Array<detailItemDataType>
  >([]);
  useEffect(() => {
    getServiceDetail(router.query.id as string).then((res) => {
      setData(res);
      setDetailItemData([
        {
          title: "누가 받을 수 있나요",
          title1: "지원대상",
          content1: res?.지원대상,
          title2: "선정기준",
          content2: res?.선정기준,
        },
        {
          title: "어떤 혜택인가요",
          title1: "지원내용",
          content1: res?.지원내용,
          title2: "",
          content2: "",
        },
        {
          title: "어떻게 신청하나요",
          title1: "신청기간",
          content1: res?.신청기한,
          title2: "신청방법",
          content2: res?.신청방법,
        },
        {
          title: "궁금한 사항이 있어요!",
          title1: "접수기관",
          content1: res?.접수기관명,
          title2: "문의처",
          content2: res?.문의처전화번호,
        },
      ]);
    });
  }, []);

  return (
    <>
      <TitleBox>
        <Title>{data?.서비스명}</Title>
        <Mention>{data?.서비스목적}</Mention>
        <Link
          target="_blank"
          href={data?.온라인신청사이트URL}
          rel="noopener noreferrer"
        >
          해당사이트 이동
        </Link>
        <DivideLine />
        <TitleFooter>
          <FooterItem>
            지원형태
            <FooterContent>
              {data?.지원유형 ?? "지원유형이 없습니다"}
            </FooterContent>
          </FooterItem>
          <FooterItem>
            신청기간
            <FooterContent>{data?.신청기한 || "기한 없음"}</FooterContent>
          </FooterItem>
          <FooterItem>
            접수기관
            <FooterContent>
              {data?.접수기관명 ?? "접수기관명이 없습니다."}
            </FooterContent>
          </FooterItem>
          <FooterItem>
            전화문의
            <FooterContent>
              {data?.문의처전화번호 ?? "전화번호가 없습니다."}
            </FooterContent>
          </FooterItem>
        </TitleFooter>
      </TitleBox>
      <DetailTitle>상세안내</DetailTitle>
      <DetailBox>
        {detailItemData?.map((el) => (
          <DetailItem key={uuidv4()}>
            <DetailItemTitle> {el.title} </DetailItemTitle>
            <DivideLine />
            {el.title1 && (
              <DetailItemText>
                <span> {el.title1} </span>
                <span> {el.content1 || "정보를 제공하지 않습니다."} </span>
              </DetailItemText>
            )}
            {el.title2 && (
              <DetailItemText>
                <span> {el.title2} </span>
                <span> {el.content2 || "정보를 제공하지 않습니다."} </span>
              </DetailItemText>
            )}
          </DetailItem>
        ))}
      </DetailBox>
    </>
  );
}
export const TitleBox = styled.div`
  margin-top: 50px;
  height: 300px;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 50px;
`;

export const Title = styled.div`
  font-size: 2em;
`;

export const Mention = styled.div``;

export const Link = styled.a`
  background-color: #6a94cd;
  width: 15em;
  height: 3em;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

export const DivideLine = styled.div`
  width: 100%;
  border: 1px solid #aaaaaa;
`;

export const TitleFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterItem = styled.div`
  width: 15em;
  font-size: 0.8rem;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 30px;
`;

export const FooterContent = styled.div`
  padding: 5px 0;
  font-size: 1.2rem;
`;

export const DetailTitle = styled.div`
  font-size: 2rem;
  margin-top: 30px;
`;

export const DetailBox = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 700px;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const DetailItem = styled.div`
  width: 30em;
  height: 300px;
  border: 1px solid #aaaaaa;
  padding: 20px;
  display: flex;
  flex-flow: nowrap column;
  gap: 10px;
`;
const DetailItemTitle = styled.div`
  font-size: 2rem;
`;
const DetailItemText = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  gap: 10px;
  & > span:nth-of-type(1)::after {
    content: " | ";
    color: #aeaeae;
  }
`;

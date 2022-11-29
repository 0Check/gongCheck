import styled from "@emotion/styled";
import Text1 from "../atoms/text1";

import DivideLine from "../atoms/divideLine";
import { BORDER_COLOR } from "../../../commons/color";
import { useRouter } from "next/router";
interface ICardProps {
  data: {
    id: string;
    부서명: string;
    상세조회URL: string;
    서비스ID: string;
    서비스명: string;
    서비스목적: string;
    선정기준: string;
    소관기관명: string;
    소관기관코드: string;
    신청기한: string;
    신청방법: string;
    조회수: string;
    지원내용: string;
    지원대상: string;
    지원유형: string;
  };
}

export default function Card(props: ICardProps) {
  const router = useRouter();
  return (
    <Wrapper
      id={props.data.id}
      onClick={() => router.push(`/detail/${props.data.id}`)}
    >
      <Text1 fontSize="1.5rem" value={props.data.서비스명} />
      <Text1
        fontSize="1rem"
        value={
          props.data.신청방법.length <= 30
            ? props.data.신청방법
            : "📌상세내용참고"
        }
      />
      <DivideLine bgColor={BORDER_COLOR} />
      <TextWrapper>
        <Text1 fontSize="1rem" value="신청기간" />
        <Text1 fontSize="1rem" value={props.data.신청기한} />
      </TextWrapper>
      <TextWrapper>
        <Text1 fontSize="1rem" value="접수기관" />
        <Text1 fontSize="1rem" value={props.data.소관기관명} />
      </TextWrapper>
      <TextWrapper>
        <Text1 fontSize="1rem" value="지원형태" />
        <Text1 fontSize="1rem" value={props.data.지원유형} />
      </TextWrapper>
      <TextWrapper>
        <Text1 fontSize="1rem" value="신청방법" />
        <Text1
          fontSize="1rem"
          value={
            props.data.신청방법.length <= 30
              ? props.data.신청방법
              : "📌상세내용참고"
          }
        />
      </TextWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 10px 0px 10px;
  width: 100%;
  height: 300px;
  border: 1px solid ${BORDER_COLOR};
  margin-bottom: 50px;
  cursor: pointer;
  @media (max-width: 412px) {
    width: 100%;
    padding: 0px 0px;
  }
`;

export const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px auto;

  & > span:nth-of-type(1)::after {
    content: " | ";
    color: #aeaeae;
  }
`;

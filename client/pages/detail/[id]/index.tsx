import styled from "@emotion/styled";

const data = {
  title: "공공서비스 이름",
  mention: "서비스에 대한 간단한 요약",
  form: "기타",
  period: "접수기간",
  agency: "접수기관",
  call: "문의 번호",
  who: "지원대상",
  rule: "선정기준",
  what: "지원내용",
  how: "신청방법",
  inquiry: "문의처",
};

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
`;

export const DetailItem = styled.div`
  width: 30em;
  height: 300px;
  border: 1px solid #aaaaaa;
  padding: 20px;
`;

export default function ServiceDetail() {
  return (
    <>
      <TitleBox>
        <Title>{data.title}</Title>
        <Mention>{data.mention}</Mention>
        <Link>해당사이트 이동</Link>
        <DivideLine />
        <TitleFooter>
          <FooterItem>
            지원형태<FooterContent>{data.form}</FooterContent>
          </FooterItem>
          <FooterItem>
            신청기간<FooterContent>{data.period}</FooterContent>
          </FooterItem>
          <FooterItem>
            접수기관<FooterContent>{data.agency}</FooterContent>
          </FooterItem>
          <FooterItem>
            전화문의<FooterContent>{data.call}</FooterContent>
          </FooterItem>
        </TitleFooter>
      </TitleBox>
      <DetailTitle>상세안내</DetailTitle>
      <DetailBox>
        <DetailItem>1</DetailItem>
        <DetailItem>2</DetailItem>
        <DetailItem>3</DetailItem>
        <DetailItem>4</DetailItem>
      </DetailBox>
    </>
  );
}

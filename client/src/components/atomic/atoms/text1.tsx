import styled from "@emotion/styled";

export default function Text1(props: any){
  return(
    <Text fontSize={props.fontSize}>{props.value}</Text>
  )
}

export const Text = styled.span<{fontSize: string}>`
  font-size: ${(props) => props.fontSize};
`;

import styled from "styled-components";

import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../responsive";

function Newsletter() {
  return (
    <Scontainer>
      <Stitle>Newsletter</Stitle>
      <Sdesc>Get timely updates from your favourite products.</Sdesc>
      <SinputContainer>
        <Sinput placeholder="Your Email" />
        <Sbutton>
          <SendIcon />
        </Sbutton>
      </SinputContainer>
    </Scontainer>
  );
}

const Scontainer = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Stitle = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Sdesc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const SinputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Sinput = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Sbutton = styled.button`
  flex: 2;
  border: none;
  background-color: teal;
  color: #fff;
`;

export default Newsletter;

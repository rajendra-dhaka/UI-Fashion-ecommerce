import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

function Navbar() {
  return (
    <Scontainer>
      <Swrapper>
        <Sleft>
          <Slanguage>EN</Slanguage>
          <SsearchContainer>
            <Sinput placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SsearchContainer>
        </Sleft>
        <Scenter>
          <Slogo>Marketz.</Slogo>
        </Scenter>
        <SRight>
          <SmenuItem>REGISTER</SmenuItem>
          <SmenuItem>SIGN IN</SmenuItem>
          <SmenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </SmenuItem>
        </SRight>
      </Swrapper>
    </Scontainer>
  );
}

const Scontainer = styled.nav`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Swrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Sleft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Slanguage = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SsearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Sinput = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Scenter = styled.div`
  flex: 1;
  text-align: center;
`;

const Slogo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const SRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const SmenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export default Navbar;

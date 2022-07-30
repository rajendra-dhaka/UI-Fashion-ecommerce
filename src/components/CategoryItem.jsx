import styled from "styled-components";
import { mobile } from "../responsive";

function CategoryItem({ item }) {
  return (
    <Scontainer>
      <Simage src={item.img} />
      <Sinfo>
        <Stitle>{item.title}</Stitle>
        <Sbutton>SHOP NOW</Sbutton>
      </Sinfo>
    </Scontainer>
  );
}

const Scontainer = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Simage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
const Sinfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Stitle = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;
const Sbutton = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

export default CategoryItem;

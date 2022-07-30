import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function ProductItem({ item }) {
  return (
    <Scontainer>
      <Scircle />
      <Simage src={item.img} />
      <Sinfo>
        <Sicon>
          <ShoppingCartOutlinedIcon />
        </Sicon>
        <Sicon>
          <SearchOutlinedIcon />
        </Sicon>
        <Sicon>
          <FavoriteBorderIcon />
        </Sicon>
      </Sinfo>
    </Scontainer>
  );
}

const Sinfo = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Scontainer = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  //Below referring to other component on hover
  &:hover ${Sinfo} {
    opacity: 1;
  }
`;

const Scircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`;
const Simage = styled.img`
  height: 75%;
  z-index: 2;
`;

const Sicon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

export default ProductItem;

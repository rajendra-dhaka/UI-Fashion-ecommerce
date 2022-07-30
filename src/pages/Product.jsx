import styled from "styled-components";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

function Product() {
  return (
    <Scontainer>
      <Navbar />
      <Announcement />
      <Swrapper>
        <SimgContainer>
          <Simage src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </SimgContainer>
        <SinfoContainer>
          <Stitle>Denim Jumpsuit</Stitle>
          <Sdesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            illo fuga laudantium. Expedita, temporibus molestiae. Dolor est amet
            fugiat odio accusamus? Esse aliquid debitis expedita praesentium
            numquam assumenda animi, officia quaerat sint. Laboriosam expedita
            aspernatur accusantium tempore rem itaque incidunt quisquam
            doloribus? Pariatur, aut nostrum. Facilis doloribus quaerat
            reiciendis sed!
          </Sdesc>
          <Sprice>
            <CurrencyRupeeOutlinedIcon style={{ fontSize: 30 }} /> 2000/-
          </Sprice>
          <SfilterContainer>
            <Sfilter>
              <SfilterTitle>Color</SfilterTitle>
              <SfilterColor color="black" />
              <SfilterColor color="darkblue" />
              <SfilterColor color="gray" />
            </Sfilter>
            <Sfilter>
              <SfilterTitle>Size</SfilterTitle>
              <SfilterSize>
                <SfilterSizeOption>XS</SfilterSizeOption>
                <SfilterSizeOption>S</SfilterSizeOption>
                <SfilterSizeOption>M</SfilterSizeOption>
                <SfilterSizeOption>L</SfilterSizeOption>
                <SfilterSizeOption>XL</SfilterSizeOption>
              </SfilterSize>
            </Sfilter>
          </SfilterContainer>
          <SaddContainer>
            <SamountContainer>
              <RemoveIcon />
              <Samount>1</Samount>
              <AddIcon />
            </SamountContainer>
            <Sbutton>ADD TO CART</Sbutton>
          </SaddContainer>
        </SinfoContainer>
      </Swrapper>
      <Newsletter />
      <Footer />
    </Scontainer>
  );
}

const Scontainer = styled.div``;
const Swrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const SimgContainer = styled.div`
  flex: 1;
`;
const Simage = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const SinfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Stitle = styled.h1`
  font-weight: 200;
`;
const Sdesc = styled.p`
  margin: 20px 0px;
`;
const Sprice = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const SfilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  ${mobile({ width: "100%" })}
`;
const Sfilter = styled.div`
  display: flex;
  align-items: center;
`;
const SfilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const SfilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const SfilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const SfilterSizeOption = styled.option``;
const SaddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const SamountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Samount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1ppx solid teal;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0px 5px;
`;
const Sbutton = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

export default Product;

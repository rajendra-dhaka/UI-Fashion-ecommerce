import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

function ProductList() {
  return (
    <Scontainer>
      <Navbar />
      <Announcement />

      <Stitle>Dresses</Stitle>
      <SfilterContainer>
        <Sfilter>
          <SfilterText>Filter Products:</SfilterText>
          <Sselect>
            <Soption disabled selected>
              Color
            </Soption>
            <Soption>White</Soption>
            <Soption>Black</Soption>
            <Soption>Red</Soption>
            <Soption>Blue</Soption>
            <Soption>Yellow</Soption>
            <Soption>Green</Soption>
          </Sselect>
          <Sselect>
            <Soption disabled selected>
              Size
            </Soption>
            <Soption>XS</Soption>
            <Soption>S</Soption>
            <Soption>M</Soption>
            <Soption>L</Soption>
            <Soption>XL</Soption>
          </Sselect>
        </Sfilter>
        <Sfilter>
          <SfilterText>Sort Products:</SfilterText>
          <Sselect>
            <Soption selected>Newest</Soption>
            <Soption>Price(asc)</Soption>
            <Soption>Price(desc)</Soption>
          </Sselect>
        </Sfilter>
      </SfilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Scontainer>
  );
}

const Scontainer = styled.div``;
const Stitle = styled.h1`
  margin: 20px;
`;
const SfilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Sfilter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const SfilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Sselect = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Soption = styled.option``;

export default ProductList;

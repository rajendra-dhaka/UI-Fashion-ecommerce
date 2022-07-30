import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import { mobile } from "../responsive";

function Cart() {
  return (
    <Scontainer>
      <Navbar />
      <Announcement />
      <Swrapper>
        <Stitle>YOUR BAG</Stitle>
        <Stop>
          <StopButton>CONTINUE SHOPPING</StopButton>
          <StopTexts>
            <StopText>Shopping Bag(2)</StopText>
            <StopText>Your Wishlist(0)</StopText>
          </StopTexts>
          <StopButton typed="filled">CHECKOUT NOW</StopButton>
        </Stop>
        <Sbottom>
          <Sinfo>
            <Sproduct>
              <SproductDetail>
                <Simage src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Sdetails>
                  <SproductName>
                    <b>Product:</b>JESSIE THUNDER SHOES
                  </SproductName>
                  <SproductId>
                    <b>ID:</b>9988756
                  </SproductId>
                  <SproductColor color="black" />
                  <SproductSize>
                    <b>Size:</b>37.5
                  </SproductSize>
                </Sdetails>
              </SproductDetail>
              <SpriceDetail>
                <SproductAmountContainer>
                  <AddIcon />
                  <SproductAmount>2</SproductAmount>
                  <RemoveIcon />
                </SproductAmountContainer>
                <SproductPrice>
                  <CurrencyRupeeOutlinedIcon />
                  500
                </SproductPrice>
              </SpriceDetail>
            </Sproduct>
            <Shr />
            <Sproduct>
              <SproductDetail>
                <Simage src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Sdetails>
                  <SproductName>
                    <b>Product:</b>JHAKURA T-SHIRT
                  </SproductName>
                  <SproductId>
                    <b>ID:</b>9974756
                  </SproductId>
                  <SproductColor color="gray" />
                  <SproductSize>
                    <b>Size:</b>M
                  </SproductSize>
                </Sdetails>
              </SproductDetail>
              <SpriceDetail>
                <SproductAmountContainer>
                  <AddIcon />
                  <SproductAmount>2</SproductAmount>
                  <RemoveIcon />
                </SproductAmountContainer>
                <SproductPrice>
                  <CurrencyRupeeOutlinedIcon />
                  900
                </SproductPrice>
              </SpriceDetail>
            </Sproduct>
          </Sinfo>
          <Ssummary>
            <SsummaryTitle>ORDER SUMMARY</SsummaryTitle>
            <SsummaryItem>
              <SsummaryItemText>Subtotal</SsummaryItemText>
              <SsummaryItemPrice>
                <CurrencyRupeeOutlinedIcon style={{ fontSize: 14 }} /> 1400
              </SsummaryItemPrice>
            </SsummaryItem>
            <SsummaryItem>
              <SsummaryItemText>Estimated Shipping</SsummaryItemText>
              <SsummaryItemPrice>
                <CurrencyRupeeOutlinedIcon style={{ fontSize: 14 }} /> 100
              </SsummaryItemPrice>
            </SsummaryItem>
            <SsummaryItem>
              <SsummaryItemText>Shipping Discount</SsummaryItemText>
              <SsummaryItemPrice>
                <CurrencyRupeeOutlinedIcon style={{ fontSize: 14 }} /> -100
              </SsummaryItemPrice>
            </SsummaryItem>
            <SsummaryItem type="total">
              <SsummaryItemText>Total </SsummaryItemText>
              <SsummaryItemPrice>
                <CurrencyRupeeOutlinedIcon /> 1400
              </SsummaryItemPrice>
            </SsummaryItem>
            <Sbutton>CHECKOUT NOW</Sbutton>
          </Ssummary>
        </Sbottom>
      </Swrapper>
      <Footer />
    </Scontainer>
  );
}

const Scontainer = styled.div``;

const Swrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Stitle = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Stop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const StopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const StopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const StopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Sbottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Sinfo = styled.div`
  flex: 3;
`;

const Sproduct = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const SproductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Simage = styled.img`
  width: 200px;
`;

const Sdetails = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const SproductName = styled.span``;

const SproductId = styled.span``;

const SproductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const SproductSize = styled.span``;

const SpriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SproductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SproductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const SproductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Shr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Ssummary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SsummaryTitle = styled.h1`
  font-weight: 200;
`;

const SsummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SsummaryItemText = styled.span``;

const SsummaryItemPrice = styled.span``;

const Sbutton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

export default Cart;

import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { mobile } from "../responsive";

function Footer() {
  return (
    <Scontainer>
      <Sleft>
        <Slogo>MARKETZ.</Slogo>
        <Sdesc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          odio, consectetur iste pariatur excepturi aliquid officia, a, corrupti
          veniam eveniet autem ducimus blanditiis quidem necessitatibus
          cupiditate vero quo natus hic!
        </Sdesc>
        <SsocialContainer>
          <SsocialIcon color="3b5999">
            <FacebookIcon />
          </SsocialIcon>
          <SsocialIcon color="E4405f">
            <InstagramIcon />
          </SsocialIcon>
          <SsocialIcon color="55ACEE">
            <TwitterIcon />
          </SsocialIcon>
          <SsocialIcon color="E60023">
            <PinterestIcon />
          </SsocialIcon>
        </SsocialContainer>
      </Sleft>
      <Scenter>
        <Stitle>Useful Links</Stitle>
        <Slist>
          <SlistItem>Home</SlistItem>
          <SlistItem>Cart</SlistItem>
          <SlistItem>Man Fashion</SlistItem>
          <SlistItem>Woman Fashion</SlistItem>
          <SlistItem>Accessories</SlistItem>
          <SlistItem>My Account</SlistItem>
          <SlistItem>Order Tracking</SlistItem>
          <SlistItem>Wishlist</SlistItem>
          <SlistItem>Terms</SlistItem>
        </Slist>
      </Scenter>
      <Sright>
        <Stitle>Contact</Stitle>
        <ScontactItem>
          <RoomIcon style={{ marginRight: "10px" }} />
          1001,Rich Road,Elite Colony,Wealties city,Currenconia-332145
        </ScontactItem>
        <ScontactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          +9999998888
        </ScontactItem>

        <ScontactItem>
          <MailOutlineIcon style={{ marginRight: "10px" }} />
          contact@marketz.ev
        </ScontactItem>
        <Spayment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Sright>
    </Scontainer>
  );
}

const Scontainer = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Sleft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Slogo = styled.h1``;
const Sdesc = styled.p`
  margin: 20px 0px;
`;
const SsocialContainer = styled.div`
  display: flex;
`;
const SsocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Scenter = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Stitle = styled.h3`
  margin-bottom: 30px;
`;

const Slist = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const SlistItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Sright = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ScontactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Spayment = styled.img`
  width: 50%;
`;

export default Footer;

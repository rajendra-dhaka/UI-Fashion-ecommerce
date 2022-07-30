import styled from "styled-components";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

function Announcement() {
  return (
    <Scontainer>
      🎉Super Deal! Free Shipping on Orders Over
      <CurrencyRupeeOutlinedIcon style={{ color: "#fff", fontSize: 16 }} />
      999/-
    </Scontainer>
  );
}

const Scontainer = styled.div`
  height: 30px;
  background-color: teal;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

export default Announcement;

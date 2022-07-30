import { useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

function Slider() {
  //STATE
  const [slideIndex, setSlideIndex] = useState(0);

  //FUNCTION
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Scontainer>
      <Sarrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Sarrow>
      <Swrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Sslide bg={item.bg} key={item.id}>
            <SimgContainer>
              <Simage src={item.img} alt={item.title} />
            </SimgContainer>
            <SinfoContainer>
              <Stitle>{item.title} </Stitle>
              <Sdesc>{item.desc}</Sdesc>
              <Sbutton>SHOW NOW</Sbutton>
            </SinfoContainer>
          </Sslide>
        ))}
      </Swrapper>
      <Sarrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Sarrow>
    </Scontainer>
  );
}

const Scontainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const Sarrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  /* the next three lines make the arrow vertically center */
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  /* or we can write ${(props) => props.direction}:10px */
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Swrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Sslide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
const SimgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Simage = styled.img`
  height: 80%;
`;

const SinfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Stitle = styled.h1`
  font-size: 70px;
`;
const Sdesc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Sbutton = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export default Slider;

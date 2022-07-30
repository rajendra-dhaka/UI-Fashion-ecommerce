import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

function Categories() {
  return (
    <Scontainer>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Scontainer>
  );
}

const Scontainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

export default Categories;

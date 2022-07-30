import styled from "styled-components";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";

function Products() {
  return (
    <Scontainer>
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Scontainer>
  );
}

const Scontainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export default Products;

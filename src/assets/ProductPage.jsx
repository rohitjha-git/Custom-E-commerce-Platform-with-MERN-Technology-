import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  background: #f8f9fa;
`;

const ProductCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 95%;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const ProductTitle = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  color: #28a745;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const ProductDescription = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
  
  &:hover {
    background: #0056b3;
  }
`;

const products = [
  {
    id: 1,
    image: "https://opsg-img-cdn-gl.heytapimg.com/epb/202412/19/AceLeaXtntKw1AZf.png",
    title: "OPPO Reno13 Pro 5G",
    price: "₹49,999",
    description: "This is a great product that you will love!"
  },
  {
    id: 2,
    image: "https://opsg-img-cdn-gl.heytapimg.com/epb/202503/17/zLbXeUqyWvMlCbVA.png",
    title: "OPPO F29 Pro 5G",
    price: "₹27999",
    description: "Experience next-gen performance!"
  },
  {
    id: 3,
    image: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno13-series/list-page/reno13-5g/skyblue441x600.png",
    title: "OPPO Reno13 5G",
    price: "₹37999",
    description: "Flagship performance with AI-enhanced camera!"
  }
];

const ProductPage = () => {
  return (
    <ProductContainer>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.title} />
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>{product.price}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
          <Button>Add to Cart</Button>
        </ProductCard>
      ))}
    </ProductContainer>
  );
};

export default ProductPage;

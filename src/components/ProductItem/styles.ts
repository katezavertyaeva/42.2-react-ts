import styled from '@emotion/styled';

export const ProductionItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 300px;
  border: 2px solid black;
  min-height:300px;
  padding: 20px;
  background: lightblue;
`;

export const ProductName = styled.h3``;

export const ProductImgWrapper = styled.div`
  width: 100px;
  height: fit-content;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;
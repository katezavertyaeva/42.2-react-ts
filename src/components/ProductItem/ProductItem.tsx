import { ProductImg, ProductImgWrapper, ProductionItemWrapper, ProductName } from './styles'
import { ProductItemProps } from './types'

function ProductItem ({productImg, productName,onCardClick}:ProductItemProps){
  return(
    <ProductionItemWrapper onClick={onCardClick}>
      <ProductName>{productName}</ProductName>
      <ProductImgWrapper>
        <ProductImg src={productImg}/>
      </ProductImgWrapper>
    </ProductionItemWrapper>
  )
}

export default ProductItem
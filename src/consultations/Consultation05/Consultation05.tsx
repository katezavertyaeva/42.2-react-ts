import ProductList from "../../components/ProductList/ProductList";

function Consultation05() {
  //Примеры случаев использования типа never
  const infinite = (): never => {
    while (true) {
      console.log('This loop never ends');
    }
  }

  const throwError = (message: string): never => {
    throw new Error(message)
  }
  // --------------

  return (
    <ProductList />
  )
}

export default Consultation05;
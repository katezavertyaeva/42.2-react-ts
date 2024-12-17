import { useContext } from "react"

import { MainCardContext } from "../MainCard/MainCard"
import { ContentComponent, DataItem } from "./styles"
// import { ContentProps } from "./types"

function Content() {
  //3 шаг. Вызываем хук useContext, в который передаём контекст, который был создан на 1-м шаге
  //При вызове хука useContext он вернёт те данные, которые были переданы в value провайдера на 2-м шаге
  //Сохраняем значение в отдельную переменную
  const userContentData = useContext(MainCardContext);
  console.log(userContentData);


  return (
    <ContentComponent>
      <DataItem>First Name: {userContentData.firstName}</DataItem>
      <DataItem>Last Name: {userContentData.lastName}</DataItem>
      <DataItem>Age: {userContentData.age}</DataItem>
    </ContentComponent>
  )
}

// Пример с props drilling
// function Content({ contentData }: ContentProps) {

//   return (
//     <ContentComponent>
//       <DataItem>First Name: {contentData.firstName}</DataItem>
//       <DataItem>Last Name: {contentData.lastName}</DataItem>
//       <DataItem>Age: {contentData.age}</DataItem>
//     </ContentComponent>
//   )
// }

export default Content
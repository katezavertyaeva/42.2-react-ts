import { useLocation, useParams } from "react-router-dom";

import GoBack from "components/GoBack/GoBack";
import { UserInfo, UserPage, UserTitle } from "./styles";

function User() {
  //хук useParams возвращает объект с параметрами из url
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  

  //при загрузке страницы отправляется запрос на сервер для получения данных определенного пользователя
  //пример данных, пришедших с сервера для пользователя с id 1
  const data = {
    id: 1,
    name: 'Bob Smith',
    job_title: 'Manager'
  }

  return (
    <UserPage>
      <UserTitle>User Page</UserTitle>
      <UserInfo>Здесь отображается информация о пользователе с ID: {id}</UserInfo>
      <UserInfo>{data.name}</UserInfo>
      <UserInfo>{data.job_title}</UserInfo>
      <GoBack />
    </UserPage>
  )
}

export default User;
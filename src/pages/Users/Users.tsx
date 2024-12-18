import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"

import Button from "components/Button/Button"
import { Title, UsersPage } from "./styles"

function Users() {
  //хук useNavigate возвращает функцию, при вызове которой нас может перенаправить на указанный url
  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate('/about')
  }

  //пример useEffect при размонтировании компонента Users
  useEffect(() => {
    return () => {
      console.log('Component Users unmounting');
    }
  }, [])

  //При загрузке страницы Users отправляется запрос на сервер, который присылает данные в виде массива объектов
  //пример данных с сервера
  const usersData = [
    { id: 1, userName: 'User 1' },
    { id: 2, userName: 'User 2' },
    { id: 3, userName: 'User 3' }
  ]

  //создаём ссылки на страницы пользователей с помощью map
  const usersLinks = usersData.map((userData) => {
    return <Link to={`/users/${userData.id}`}>{userData.userName}</Link>

    // return <Link to={`/users/${userData.id}`} state={{ userId: 1 }}>{userData.userName}</Link>
  })

  return (
    <UsersPage>
      {/* Content Users page */}
      <Title>Select user</Title>
      {/* Создаём ссылки, которые буду переносить нас на соответствующую страницу с данными пользователя, в зависимости от id */}
      {/* <Link to='/users/1'>User 1</Link>
      <Link to='/users/2'>User 2</Link>
      <Link to='/users/3'>User 3</Link> */}
      {usersLinks}
      <Button name="Go to About Page" onClick={goToAboutPage} />
    </UsersPage>
  )
}

export default Users
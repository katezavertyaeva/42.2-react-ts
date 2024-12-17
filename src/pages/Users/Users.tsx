import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

import Button from "components/Button/Button"
import { UsersPage } from "./styles"

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

  return (
    <UsersPage>
      Content Users page
      <Button name="Go to About Page" onClick={goToAboutPage} />
    </UsersPage>
  )
}

export default Users
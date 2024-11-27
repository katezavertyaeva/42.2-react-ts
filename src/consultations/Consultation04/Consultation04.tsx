import LoginForm from '../../components/LoginForm/LoginForm';
import ProductItem from '../../components/ProductItem/ProductItem';
import { Consultation04Container } from './styles';

function Consultation04() {
  //readonly
  interface User {
    readonly name: string;
    age: number;
  }

  const user: User = { name: 'Tom', age: 23 };

  user.age = 24;
  // user.name = 'Bob';

  const colors: readonly string[] = ['red', 'black'];
  // colors[0] = 'green';
  // console.log(colors);

  //unknown
  let userName: unknown;
  userName = 'Mary';
  userName = undefined;
  // userName = 'Olga';

  // console.log(userName.toUpperCase());

  if (typeof userName === 'string') {
    console.log(userName.toUpperCase());
  }


  return (
    <Consultation04Container>
      <LoginForm />
      <ProductItem product='milk'/>
    </Consultation04Container>
  )
}

export default Consultation04;
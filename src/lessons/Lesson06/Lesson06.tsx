import "./styles.ts";
import { Lesson06Container } from "./styles";

function Lesson06() {
  // 1. Типизация строк
  let userName: string = 'Tom';
  userName = "28";
  userName = '';
  let fullName: string = `${userName} Smith`;

  let result: string = '2';
  result = 1 + 2 + '4';
  console.log(result);

  //2. Типизация чисел
  let luckyNumber: number = 7;
  // luckyNumber = '34';
  luckyNumber = NaN;
  luckyNumber = Infinity;
  luckyNumber = -8;
  luckyNumber = 1.4;
  // luckyNumber = 2 + '3';

  //тип BigInt - bigint

  //3. Типизация логического типа
  let isAdmin: boolean = true;
  isAdmin = false;
  // isAdmin = undefined;
  isAdmin = 2 > 1;
  isAdmin = !!1;
  console.log(isAdmin);

  //4. null и undefined
  let emptyValue: null = null;
  // emptyValue = 0;
  // emptyValue = undefined;

  let data: undefined = undefined;
  // data = 0;
  // data = null;

  //5.Типизация массива
  const colors: string[] = ['red', 'blue', 'black'];
  // colors.push(23);
  colors.push('23');
  // colors[0] = 345234;
  colors[0] = '345234';

  //6. Кортеж (tupel)
  const fruits: [string, number] = ['apple', 4];
  fruits.push('cherry');
  console.log(fruits);
  // fruits[2]

  //7. Типизация возвращаемого функцией значения
  const showMessage = (): void => {
    console.log('Hello');
  }

  showMessage();

  const returnNumber = (): number => {
    return 45
  }

  console.log(returnNumber());

  //8. Автоматическое определение типа и any
  let name = 'Bob';
  // name = 34;

  let userData;

  userData = 'Mary';
  userData = 40;
  userData = ['John', 56];

  let age: any = 45;
  age = '30';

  // console.log(a);
  var a = 30;

  //9. Типизация параметров функций
  const getUserData = (firstName: string, age: number = 30) => {
    return `${firstName} ${age}`
  }

  getUserData('Nick');

  // 10. Union type
  let isManager: boolean | undefined | string = true;
  isManager = undefined;
  isManager = 'yes';

  // 11. Типизация объектов
  interface User {
    name: string,
    age?: number | string
  }

  // const user: User = {
  //   name: 'Lola',
  //   age: 34
  // }

  const user: User = {
    name: 'Lola',
  }

  //type
  type Animal = {
    name?: string
    // weight?: 100
    weight?: number

  }

  const animal: Animal = {
    // weight: 100,
    name: 'Lion'
  }

  console.log(animal);


  interface Zoo {
    animalData: Animal
    city: string
  }

  const zoo: Zoo = {
    animalData: {
      weight: 250,
      name: 'Horde'
    },
    city: 'Berlin'
  }

  return (
    <Lesson06Container>
      Lesson 6 - Type Script
    </Lesson06Container>
  );
}

export default Lesson06;

import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

import Counter from "../../components/Counter/Counter";
import Input from "components/Input/Input";
import { Lesson09Container, ResultBlock } from "./styles";

function Lesson09() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [joke, setJoke] = useState<string | undefined>('');
  const [count, setCount] = useState<number>(1);

  // console.log('component render or re-render');

  const onPlusClick = (): void => {
    setCount((prevValue) => prevValue + 2);
  };

  const onMinusClick = (): void => {
    setCount((prevValue) => prevValue - 2);
  };

  const searchOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  //useEffect при монтирование (mouting) -пустой массив зависимостей
  useEffect(() => { console.log('mouting') }, []);

  //useEffect при обновление (update) - массив зависимостей c переменной (state, props)
  useEffect(() => { console.log('update') }, [count]);

  //useEffect при размонтировании (unmounting) -пустой массив зависимостей, в функции (первый аргумент), возвращаем другую функцию
  useEffect(() => {
    return () => {
      console.log('unmounting');
    }
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      // console.log(response);
      setJoke(response.data.punchline)
    } catch (err) {
      console.log(err);
    }
  }

  //отправка запроса при монтировании
  // useEffect(() => {
  //   fetchData()
  // }, [])

  //отправка запроса при изменении поля
  useEffect(() => {
    fetchData()
  }, [searchValue])

  console.log(joke);

  return (
    <Lesson09Container>
      <ResultBlock>{joke}</ResultBlock>
      <Input name='data' placeholder="search" value={searchValue} onChange={searchOnChange} />
      <Counter countValue={count} onMinus={onMinusClick} onPlus={onPlusClick} />
    </Lesson09Container>
  )
}

export default Lesson09;
import { ChangeEvent, useState } from "react";

import Input from "../../components/Input/Input";
//Пример работы с импортом компонента относительно папки src
//для настройки необходимо добавить строку "baseUrl": "./src", в tsconfig.json
import Button from "components/Button/Button";
import { FormWrapper, Homework08Container, ResultWrapper, ResultBlock } from "./styles";

function Homework08() {
  const [firstNote, setFirstNote] = useState<string>('');
  const [secondNote, setSecondNote] = useState<string>('');
  //переменная для контроля отображения блока с результатами
  const [isShowResults, setIsShowResults] = useState<boolean>(false)
  //стейты для хранения результатов из полей
  const [firstResult, setFirstResult] = useState<string>('');
  const [secondResult, setSecondResult] = useState<string>('');


  const firstNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstNote(event.target.value)
  }

  const secondNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondNote(event.target.value)
  }

  const showResult = (): void => {
    setFirstResult(firstNote);
    setSecondResult(secondNote);
    // Используем логический оператор НЕ(!), для изменения стейта на противоположный, при нажатии на кнопку (работает с boolean значениями)
    setIsShowResults(!isShowResults);
  }

  return (
    <Homework08Container>
      <FormWrapper>
        <Input
          name='first-note'
          placeholder="Enter first note"
          value={firstNote}
          onChange={firstNoteOnChange}
        />
        <Input
          name='second-note'
          placeholder="Enter second note"
          value={secondNote}
          onChange={secondNoteOnChange}
        />
        <Button name='SHOW/HIDE RESULT' onClick={showResult} />
      </FormWrapper>
      {/* Использование оператора условного рендеринга для отображения блока с результатами */}
      {isShowResults && <ResultWrapper>
        {/* Использование оператора условного рендеринга для отображения отдельных значений блоков */}
        {firstResult && <ResultBlock>{firstResult}</ResultBlock>}
        {secondResult && <ResultBlock>{secondResult}</ResultBlock>}
      </ResultWrapper>}
    </Homework08Container>
  )
}

export default Homework08;
import "./styles.ts";
import { InputProps } from './types';
import { InputContainer, InputElement, Label } from './styles';

function Input({ name, id, type = 'text', placeholder, label }: InputProps) {
  return (
    <InputContainer>
      {/* Пример оператора условного рендеринга */}
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input-element"
      />
    </InputContainer>
  );
}

export default Input;

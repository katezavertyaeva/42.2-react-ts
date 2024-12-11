import { useFormik } from "formik";
import * as Yup from 'yup';

import Button from "../Button/Button";
import Input from "../Input/Input";
import "./styles.ts";
import { LoginFormWrapper, LoginFormTitle, InputsContainer } from './styles';
import { LoginFormValue, LOGIN_FORM_NAMES } from "./types";

function LoginForm() {
  //минимум 8 символов, специальный символ и хотя бы одна заглавная буква
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const nameRegx = /^[a-zA-Z]+$/;

  //создаём валидационную схему через Yup
  const shema = Yup.object().shape({
    [LOGIN_FORM_NAMES.EMAIL]: Yup.string()
      .required('Field email is required')
      .email('Field has type email')
      .test('Check value length', 'Max 25 symbols', (value) => value.length <= 25),
    [LOGIN_FORM_NAMES.PASSWORD]: Yup.string()
      .matches(passwordRegex, 'Password must be at least 8 characters long, include uupercase, lowercase, number and special character')
      .required('Field password is required'),
    // [LOGIN_FORM_NAMES.PASSWORD]: Yup.number()
    //   .required('Field password is required')
    //   .typeError('Password must be number')
    //   .test('Check min password length', 'Min 10 symbols', value => String(value).length >= 10)
    //   .test('Check max password length', 'Max 20 symbols', value => String(value).length <= 20)
    //проверки max и min работают с числовыми значениями и 
    //они указывает на минимальное и минимальное значение в поле(!не количество сиволов)
    // .max(150, 'Max 150')
    // .min(18, 'Min 18')
    [LOGIN_FORM_NAMES.USER_NAME]: Yup.string()
    .required("Field Name is required")
    .test(
      "Check symbol lenght",
      "Min 2 and Max 30 symbol",
      (value) => value.length >= 2 && value.length <= 30
    ).matches(nameRegx, "The letters must be in Latin")
  });

  //Настройка формы. Сохраняем возвращаемое useFormik значение (объект) в переменную formik
  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_NAMES.EMAIL]: '',
      [LOGIN_FORM_NAMES.PASSWORD]: '',
      [LOGIN_FORM_NAMES.USER_NAME]: "",
    } as LoginFormValue,
    //привязка валидационной схемы Yup к формику формы LoginForm
    validationSchema: shema,
    validateOnChange: false,
    // validateOnMount: true,
    onSubmit: (values: LoginFormValue) => {
      console.log(values);
    }
  });

  console.log(formik);

  return (
    <LoginFormWrapper onSubmit={formik.handleSubmit}>
      <LoginFormTitle>Login form</LoginFormTitle>
      <InputsContainer>
      <Input 
        name={LOGIN_FORM_NAMES.USER_NAME} 
        id="userName"
        placeholder="Your Name"
        label="Name"
        value= {formik.values[LOGIN_FORM_NAMES.USER_NAME]}
        onChange={formik.handleChange}
        error={formik.errors[LOGIN_FORM_NAMES.USER_NAME]}
        />
        <Input
          name={LOGIN_FORM_NAMES.EMAIL}
          id="user_email"
          // type="email"
          placeholder="Enter your email"
          label="Email"
          value={formik.values[LOGIN_FORM_NAMES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.EMAIL]}
        />
        <Input
          name={LOGIN_FORM_NAMES.PASSWORD}
          id="user_password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values[LOGIN_FORM_NAMES.PASSWORD]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.PASSWORD]}
        />
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormWrapper>
  );
}

export default LoginForm;

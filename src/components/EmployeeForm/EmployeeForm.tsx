import { useFormik } from 'formik'
import * as Yup from 'yup'

import Input from "components/Input/Input";
import { Checkbox, CheckboxContainer, CheckboxLabel, EmployeeFormContainer } from "./styles";
import Button from "components/Button/Button";
import { EmployeeFormValue, EMPLOYEE_FIELD_NAMES } from './types';

function EmployeeForm() {

  const validationSchema = Yup.object().shape({
    [EMPLOYEE_FIELD_NAMES.NAME]: Yup.string()
      .required('Required field')
      .test('check min length', 'Min 2 symbols', value => value.length >= 2)
      .test('check max length', 'Max 50 symbols', value => value.length <= 50),
    [EMPLOYEE_FIELD_NAMES.SURNAME]: Yup.string()
      .required('Required field')
      .test('check max length', 'Max 15 symbols', value => value.length <= 15),
    [EMPLOYEE_FIELD_NAMES.AGE]: Yup.number()
      .min(18, 'Min age 18')
      .max(80, 'Max age 80'),
    [EMPLOYEE_FIELD_NAMES.JOB_TITLE]: Yup.string()
      .required('Required field')
      .test('check max length', 'Max 30 symbols', value => value.length <= 30),
    [EMPLOYEE_FIELD_NAMES.AGREEMENT]: Yup.boolean().oneOf([true], 'Accept agreement'),
  });

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FIELD_NAMES.NAME]: '',
      [EMPLOYEE_FIELD_NAMES.SURNAME]: '',
      [EMPLOYEE_FIELD_NAMES.AGE]: '',
      [EMPLOYEE_FIELD_NAMES.JOB_TITLE]: '',
      [EMPLOYEE_FIELD_NAMES.AGREEMENT]: false,
    } as EmployeeFormValue,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValue) => {
      console.table(values)
    }
  })

  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <Input
        name={EMPLOYEE_FIELD_NAMES.NAME}
        label='Name*'
        placeholder='Enter employee name'
        id='employee_name_id'
        value={formik.values[EMPLOYEE_FIELD_NAMES.NAME]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FIELD_NAMES.NAME]}
      />
      <Input
        name={EMPLOYEE_FIELD_NAMES.SURNAME}
        label='Surname*'
        placeholder='Enter employee surname'
        id='employee_surname_id'
        value={formik.values[EMPLOYEE_FIELD_NAMES.SURNAME]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FIELD_NAMES.SURNAME]}
      />
      <Input
        name={EMPLOYEE_FIELD_NAMES.AGE}
        label='Age'
        placeholder='Enter employee age'
        id='employee_age_id'
        value={formik.values[EMPLOYEE_FIELD_NAMES.AGE]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FIELD_NAMES.AGE]}
      />
      <Input
        name={EMPLOYEE_FIELD_NAMES.JOB_TITLE}
        label='Job title*'
        placeholder='Enter employee job title'
        id='employee_job_id'
        value={formik.values[EMPLOYEE_FIELD_NAMES.JOB_TITLE]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FIELD_NAMES.JOB_TITLE]}
      />
      <CheckboxContainer>
        <Checkbox
          type='checkbox'
          id='agree_id'
          name={EMPLOYEE_FIELD_NAMES.AGREEMENT}
          onChange={formik.handleChange}
          checked={formik.values[EMPLOYEE_FIELD_NAMES.AGREEMENT]}
        />
        <CheckboxLabel htmlFor='agree_id'>I Agree</CheckboxLabel>
      </CheckboxContainer>
      <Button name='Create' type='submit' disabled={!formik.values[EMPLOYEE_FIELD_NAMES.AGREEMENT]} />
    </EmployeeFormContainer>
  )
}

export default EmployeeForm
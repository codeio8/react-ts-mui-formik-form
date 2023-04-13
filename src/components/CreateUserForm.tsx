import * as yup from 'yup'

import { Button, CircularProgress, MenuItem, Stack } from '@mui/material'
import { Form, Formik, FormikHelpers } from 'formik'

import { FormDateField } from './FormDateField'
import { FormSelect } from './FormSelect'
import { FormTextField } from './FormTextField'
import sleep from '../helpers/sleep'

export const CreateUserForm = () => {
  const initialValues = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDate: null,
    gender: '',
  }

  const onSubmit = async (
    data: typeof initialValues,
    formikHelpers: FormikHelpers<typeof initialValues>,
  ) => {
    await sleep(2000)
    console.log(data)
    formikHelpers.resetForm()
  }

  const validationSchema = yup.object().shape({
    username: yup.string().email('email invalido').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
    firstName: yup.string().required('Campo obrigatório'),
    lastName: yup.string().required('Campo obrigatório'),
    birthDate: yup.date().required('Campo obrigatório'),
    gender: yup.string().required('Campo obrigatório'),
  })

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form>
          <Stack gap={2}>
            <FormTextField name="username" label="Email" type="email" fullWidth />
            <FormTextField name="password" label="Senha" type="password" fullWidth />
            <Stack direction={'row'} gap={2}>
              <FormTextField name="firstName" label="Nome" fullWidth />
              <FormTextField name="lastName" label="Sobrenome" fullWidth />
            </Stack>
            <FormDateField name="birthDate" label="Data de nascimento" />
            <FormSelect name="gender" label="Genero" fullWidth>
              <MenuItem value="male">Masculino</MenuItem>
              <MenuItem value="female">Feminino</MenuItem>
            </FormSelect>
            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={isSubmitting && <CircularProgress size={20} />}
              disabled={isSubmitting || !isValid || !dirty}
              disableElevation
            >
              Continuar
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  )
}

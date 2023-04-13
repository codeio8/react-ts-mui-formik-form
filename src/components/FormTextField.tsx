import { FieldProps, getIn, useFormikContext } from 'formik'
import { TextField, TextFieldProps } from '@mui/material'

import React from 'react'

type FormTextFieldProps = {
  name: string
} & TextFieldProps

export const FormTextField: React.FC<FormTextFieldProps> = (props) => {
  const { getFieldProps, isSubmitting, errors, touched } = useFormikContext<any>()

  const fieldProps = getFieldProps(props.name)
  const error = getIn(errors, props.name)
  const isTouched = touched[props.name]

  return (
    <TextField
      variant="outlined"
      disabled={isSubmitting}
      error={!!error && !!isTouched}
      helperText={error}
      {...fieldProps}
      {...props}
    />
  )
}

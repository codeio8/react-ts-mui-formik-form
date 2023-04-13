import { FormControl, InputLabel, Select, SelectProps } from '@mui/material'
import { getIn, useFormikContext } from 'formik'

import React from 'react'

type FormSelectProps = { name: string } & SelectProps

export const FormSelect: React.FC<FormSelectProps> = (props) => {
  const { getFieldProps, isSubmitting, errors, touched } = useFormikContext<any>()

  const fieldProps = getFieldProps(props.name)
  const error = getIn(errors, props.name)
  const isTouched = touched[props.name]

  return (
    <FormControl
      disabled={isSubmitting}
      error={!!error && !!isTouched}
      fullWidth={props.fullWidth}
    >
      <InputLabel id={props.name}>Age</InputLabel>
      <Select {...fieldProps} id={props.name} {...props} error={!!error && !!isTouched}>
        {props.children}
      </Select>
    </FormControl>
  )
}

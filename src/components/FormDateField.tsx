import { DatePicker, DatePickerProps, LocalizationProvider } from '@mui/x-date-pickers'
import { getIn, useFormikContext } from 'formik'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import React from 'react'

type FormDateFieldProps = { name: string } & DatePickerProps<any>

export const FormDateField: React.FC<FormDateFieldProps> = (props) => {
  const { getFieldProps, isSubmitting, errors, setFieldValue } = useFormikContext<any>()

  const fieldProps = getFieldProps(props.name)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={fieldProps.value}
        disabled={isSubmitting}
        onChange={(value) => setFieldValue(props.name, value)}
        {...props}
      />
    </LocalizationProvider>
  )
}

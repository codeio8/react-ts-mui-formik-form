import createPalette from '@mui/material/styles/createPalette'
import { createTheme } from '@mui/material'

const palette = createPalette({
  primary: {
    main: '#360880',
  },
})

export default createTheme({
  palette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
})

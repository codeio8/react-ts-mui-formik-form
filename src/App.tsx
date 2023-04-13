import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './app.css'

import { Paper, ThemeProvider, Typography } from '@mui/material'

import { CreateUserForm } from './components/CreateUserForm'
import MuiTheme from './settings/MuiTheme'
import background from '../public/background.jpg'

function App() {
  return (
    <ThemeProvider theme={MuiTheme}>
      <div className="app" style={{ background: `url(${background})` }}>
        <Paper sx={{ p: 5, maxWidth: 450, width: '100%' }} elevation={0}>
          <Typography
            fontWeight={500}
            variant="h1"
            fontSize={24}
            textAlign="center"
            mb={5}
          >
            Formulario de cadastro
          </Typography>
          <CreateUserForm />
        </Paper>
      </div>
    </ThemeProvider>
  )
}

export default App

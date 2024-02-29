import { Box, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Style from './BaseLayout.module.scss'
import Navbar from './Navbar'
import About from './about/About'
import Home from './home/Home'
import Portfolio from './portfolio/Portfolio'

export default function BaseLayout() {
  let [darkMode, setDarkMode] = useState(false)

  function handleToggleDarkMode() {
    let oppositeOfCurrentDarkMode = !darkMode
    localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
    setDarkMode(oppositeOfCurrentDarkMode)
  }

  useEffect(() => {
    let detectedDarkMode = localStorage.getItem('darkMode') === 'true'

    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode)
    } else {
      localStorage.setItem('darkMode', 'false')
    }
  }, [])

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid
        container
        display={'flex'}
        flexDirection={'column'}
        minHeight={'100vh'}
        justifyContent={'space-between'}
      >
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
        </Grid>
        <Grid item flexGrow={1}>
          <Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/about'} element={<About />} />
            <Route exact path={'/portfolio'} element={<Portfolio />} />
          </Routes>
        </Grid>
        <Grid item>
          <Box
            component={'footer'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            py={'1.5rem'}
            sx={{ opacity: 0.7 }}
            width={'100%'}
          >
            <p>
              Made with &hearts; by{' '}
              <a href={'https://github.com/builtbysuraj'}>Suraj Gupta</a>
            </p>
            <p>&copy; 2024</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

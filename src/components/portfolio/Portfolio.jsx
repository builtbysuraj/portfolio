import { Box, Grid } from '@mui/material'
import { info } from '../../info/Info'
import PortfolioBlock from './PortfolioBlock'

export default function Portfolio() {
  return (
    <Box>
      <Grid container display={'flex'} justifyContent={'center'}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

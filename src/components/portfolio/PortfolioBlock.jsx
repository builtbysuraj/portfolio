import { Box } from '@mui/material'
import IconLink from './IconLink'

function PortfolioBlock({ image, live, source, title }) {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <div
        style={{
          height: '390px',
          objectFit: 'cover',
        }}
      >
        <Box
          component={'img'}
          src={image}
          alt={'mockup'}
          sx={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <h1 style={{ fontSize: '2rem' }}>{title}</h1>
      <Box
        className={'portfolio'}
        display={'flex'}
        flexDirection={'column'}
        gap={'0.5rem'}
        alignItems={'center'}
        fontSize={'1.5rem'}
        py={'2rem'}
      >
        <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <IconLink
            link={live}
            title={'Live Demo'}
            icon={'fa-brands fa-chrome'}
          />
        </Box>
        <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
        </Box>
      </Box>
    </Box>
  )
}

export default PortfolioBlock

import React, { FC } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@material-ui/core'
import { GitHub } from '@material-ui/icons'

const Navbar: FC = () => {
  return (
    <AppBar position='static'>
      <Toolbar className='flex justify-between'>
        <Typography variant='h6'>Kakao Utils</Typography>
        <div>
          <Button color='inherit' startIcon={<GitHub />}>
            Source Code
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

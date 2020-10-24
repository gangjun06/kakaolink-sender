import React, { FC, useEffect } from 'react'
import Navbar from './components/Navbar'
import { Container } from '@material-ui/core'

import { api_key } from './config.json'

const App: FC = ({ children }) => {
  useEffect(() => {
    const kakao = window.Kakao
    kakao.init(api_key)
    console.log(kakao.isInitialized())
  }, [])

  return (
    <div className='App'>
      <Navbar />
      <Container>
        <div id='app-container'>{children}</div>
      </Container>
    </div>
  )
}

export default App

import React, { FC, useEffect } from 'react'
import { api_key } from "./config.json"
import Home from './pages/Home'

const App:FC = ({children}) => {
  // useEffect(() => {
  //   const kakao = window.Kakao
  //   kakao.init(api_key)
  //   console.log(kakao.isInitialized())
  // }, [])

  return <div className='App'>
    {children}
  </div>
}

export default App

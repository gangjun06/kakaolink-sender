import React, { FC } from 'react'
import { Send } from '../utils/Message'

const Home: FC = () => {
  const onSend = () => {
    Send()
  }
  return (
    <div>
      <div onClick={onSend}>Send</div>
    </div>
  )
}

export default Home

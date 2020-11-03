import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import queryString from 'query-string'

const Redirect: FC = () => {
  const history = useHistory()
  useEffect(() => {
    const { href } = queryString.parse(history.location.search)
    if (!href) history.push('/')
    else
      window.location.href = window.encodeURI(
        window.atob(Array.isArray(href) ? href[0] : href)
      )
  }, [])
  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '30px'
        }}>
        해당 사이트로 이동 중입니다
      </div>
    </div>
  )
}

export default Redirect

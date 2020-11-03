import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import queryString from 'query-string'

const Redirect: FC = () => {
  const history = useHistory()
  useEffect(() => {
    const { href } = queryString.parse(history.location.search)
    if (!href) history.push('/')
    else window.location.href = window.encodeURI(window.atob(Array.isArray(href) ? href[0] : href))
  }, [])
  return <></>
}

export default Redirect

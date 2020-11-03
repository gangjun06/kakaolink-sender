import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import Home from './pages/Home'
import Redirect from './pages/Redirect'


declare global {
  interface Window {
    Kakao: any
  }
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Home}/>
        <Route exact path="/redirect" component={Redirect}/>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

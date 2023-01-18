import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import FoodlyApp from './FoodlyApp'
import './index.css'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
 <Provider store={store}>

    <BrowserRouter >
    <FoodlyApp />
    </BrowserRouter>
 </Provider>
 </React.StrictMode>
)

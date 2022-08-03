import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
//redux
import {imagesReducer} from './redux/reducers/images.js'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'

const store = createStore(imagesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)

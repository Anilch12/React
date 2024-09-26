import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import Store from './Component.js/Store.js'
createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
      <App />
  </Provider>
)

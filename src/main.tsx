import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './router'
import { RouterProvider } from "react-router-dom";
import { store } from './store/store'
import { Provider } from 'react-redux'
import mainApp from './app/mainApp';
import { MainAppContext } from './context/MainAppContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainAppContext.Provider value={mainApp}>
        <RouterProvider router={router} />
      </MainAppContext.Provider>
    </Provider>
  </React.StrictMode >,
)

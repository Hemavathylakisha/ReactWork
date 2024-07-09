import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux';
import store from './redux/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Counter from './components/Counter.jsx';
import CounterChange from './components/CounterChange.jsx';
import Product from './components/Product.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/counterchange",
        element: <CounterChange />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

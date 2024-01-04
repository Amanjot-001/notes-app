import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import Notes from './components/Notes.jsx'
import Edit from './components/Edit.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Notes />
      },
      {
        path: '/edit/:id',
        element: <Edit />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)

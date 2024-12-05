import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root.jsx';
import Login from './pages/Login.jsx';
import AuthProvider from './providers/AuthProviders.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Registration from './pages/Registration.jsx';
import Home from './pages/Home.jsx';
import AddReview from './pages/AddReview.jsx';
import MyReviews from './pages/MyReviews.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/addreview",
        element: <AddReview />,
      },
      {
        path: "/myreviews",
        element: <MyReviews />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

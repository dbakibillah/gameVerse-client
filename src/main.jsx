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
import ReviewDetails from './pages/ReviewDetails.jsx';
import AllReviews from './pages/AllRevirews.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Watchlist from './pages/Watchlist.jsx';
import UpdateReview from './pages/UpdateReview.jsx';
import ThemeProvider from './providers/ThemeProvider.jsx';

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
        element: <PrivateRoute><AddReview /></PrivateRoute>,
      },
      {
        path: "/myreviews",
        element: <PrivateRoute><MyReviews /></PrivateRoute>,
      },
      {
        path: "/reviews",
        element: <AllReviews />,
      },
      {
        path: "/reviews/:id",
        element: <ReviewDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`),
      },
      {
        path: "/mywatchlist",
        element: <PrivateRoute><Watchlist /></PrivateRoute>,
      },
      {
        path: "/updatereview/:id",
        element: <UpdateReview />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/reviews/${params.id}`),
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)

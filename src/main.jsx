import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import store from './store/configureStore';
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Home from './routes/home';
import Login from './routes/login';
import Register from './routes/register';
import DetailThread from './routes/detailThread';
import ThreadNew from './routes/threadNew';
import Onboarding from './routes/onboarding';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/auth.css';
import './assets/styles/index.css';
import SearchThread from './routes/search';
import LeaderBoard from './routes/leaderboards';
import UsersProfileMe from './pages/profile/UsersProfileMe';
import UsersProfile from './pages/profile/UsersProfile';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/thread/new',
          element: <ThreadNew />,
        },
        {
          path: '/thread/:id',
          element: <DetailThread />,
        },
        {
          path: '/search',
          element: <SearchThread />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/profile',
          element: <UsersProfileMe />,
        },
        {
          path: '/profile/:id',
          element: <UsersProfile />,
        },
        {
          path: '/onboarding',
          element: <Onboarding />,
        },
        {
          path: '/leaderboards',
          element: <LeaderBoard />,
        },
      ],
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
    },
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

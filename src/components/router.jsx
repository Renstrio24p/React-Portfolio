import { createBrowserRouter } from 'react-router-dom';
import Home from './home';
import Start from '../start';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import NotFound from './notfound';
import ScrollToTop from './ScrollToTop';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Start />,
      children: [
        {
          path: '/',
          element: <ScrollToTop><Home /></ScrollToTop>
        },
        {
          path: '/about',
          element: <ScrollToTop><About /></ScrollToTop>
        },
        {
          path: '/portfolio',
          element: <ScrollToTop><Portfolio /></ScrollToTop>
        },
        {
          path: '/contact',
          element: <ScrollToTop><Contact /></ScrollToTop>
        },
        {
          path: '*',
          element: <ScrollToTop><NotFound /></ScrollToTop>
        }
      ]
    },
  ]
);

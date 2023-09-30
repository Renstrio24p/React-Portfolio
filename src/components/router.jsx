import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./home";
import Start from "../start";
import About from "./about";
import Contact from "./contact";
import Portfolio from "./portfolio";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Start />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/portfolio',
                    element: <Portfolio />
                },
                {
                    path: '/contact',
                    element: <Contact />
                },
               
            ]
        },
    ]
)
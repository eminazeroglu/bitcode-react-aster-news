import { Navigate } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import NewsSearch from "../pages/NewsSearch";
import NewsView from "../pages/NewsView";
import Author from "~/pages/Author.jsx";

const routes = [
    {
        path: '/',
        element: <Home/>,
        layout: 'appLayout'
    },
    {
        path: '/view/:slug',
        element: <NewsView/>,
        layout: 'appLayout'
    },
    {
        path: '/search/:category',
        element: <NewsSearch/>,
        layout: 'appLayout'
    },
    {
        path: '/author/:slug',
        element: <Author/>,
        layout: 'appLayout'
    },
    {
        path: '*',
        element: <Navigate to={'/'}/>
    }
];

routes.map(route => {
    if (route?.layout === 'appLayout') {
        route.element = <AppLayout>
            {route.element}
        </AppLayout>
    }
    return route;
})

export default routes;

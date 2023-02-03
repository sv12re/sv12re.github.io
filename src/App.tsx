import * as React from 'react';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<Home/>} />,
        <Route element={<PageNotFound />} />
    ])
)

const App = () => <RouterProvider router={router} />;

export default App;
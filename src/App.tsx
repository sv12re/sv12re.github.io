import React from 'react';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Other from './pages/Other';
import PageNotFound from './pages/PageNotFound';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/other" element={<Other/>} />
            <Route element={<PageNotFound />} />
        </Route>
    )
)

const App = () => <RouterProvider router={router} />;

export default App;
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Orders from '../../modules/Orders';
import DetailedOrder from "../../modules/DetailedOrder";
import MainMenu from "../../modules/MainMenu";
import CreateMenuItem from "../../modules/CreateMenuItem";
import OrdersHistory from "../../modules/OrdersHistory";
import Settings from "../../modules/Settings";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Orders />} />
            <Route path="order/:id" element={<DetailedOrder />} />
            <Route path="menu" element={<MainMenu />} />
            <Route path="menu/create" element={<CreateMenuItem />} />
            <Route path="orders-history" element={<OrdersHistory />} />
            <Route path='settings' element={<Settings />} />
        </Routes>
    )
};

export default AppRoutes;
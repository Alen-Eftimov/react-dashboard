import React from "react";
import { Card, Table, Button } from "antd";
import { Link } from "react-router-dom";
import dishes from '../../assets/data/dishes.json';

const MainMenu = () => {
    const tableColumns = [
        {
            title: 'Menu Item',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => `${price} €`
        },
        {
            title: 'Action',
            key: 'action',
            render: () => <Button danger>Remove</Button>
        }
    ];

    const renderNewItemButton = () => {
        return (
            <Link to={'create'}>
                <Button type='primary'>Add New Item</Button>
            </Link>
        )
    };

    return (
        <Card title={'Menu'} style={{ margin: 20 }} extra={renderNewItemButton()}>
            <Table
             dataSource={dishes}
             columns={tableColumns}
             rowKey='id'
            />
        </Card>
    )
};

export default MainMenu;
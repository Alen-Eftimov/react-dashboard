import React from "react";
import { Layout, Image } from "antd";
import SideMenu from "../../components/SideMenu";
import AppRoutes from "../../components/AppRoutes";

const { Sider, Content, Footer } = Layout;
const Menu = () => {
    return(
        <Layout>
            <Sider style={{ height: '115vh', backgroundColor: 'white' }}>
                <Image src='https://www.logodesign.net/images/abstract-logo.png' preview={false} />
                <SideMenu />
            </Sider>
            <Layout>
                <Content>
                    <AppRoutes />
                </Content>
                <Footer style={{backgroundColor: 'white', textAlign: 'center'}}>
                    Footer Dashboard &copy;2023
                </Footer>
            </Layout>
        </Layout>
    )
};

export default Menu;
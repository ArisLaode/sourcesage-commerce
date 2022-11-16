import React, { useState, useEffect } from 'react';
import {Layout, List, Card, Divider} from 'antd';
import HeaderApp from "../components/Header";
import FooterApp from "../components/Footer";
import Rest from "../utils/Rest";
import {readProduct} from '../utils/Config';
import {Link} from "react-router-dom";
import Meta from "antd/es/card/Meta";

const { Content } = Layout;

function Index() {

    const [data, setData] = useState([])
    useEffect(() => {
        Rest.get(readProduct).then((response) => {
            setData(response);
        });}, []);
    if (!data) return null;
    return (
        <Layout style={{ minHeight: '95vh' }}>
            <HeaderApp />
            <Content style={{padding: '0 100px', margin: '15px 0 0 0'}}>
                <p>
                    <Divider orientation="plain"><h2><b>List Product</b> </h2></Divider>
                </p>
                <List
                    grid={{
                        gutter: 16,
                        column: 4,
                    }}
                    dataSource={data}
                    renderItem={(item) => (
                      <List.Item>
                              <Card
                                hoverable
                                style={{
                                  width: 290
                                }}
                                cover={<img style={{width: 290, height: 190}}  alt={item.logo_id} src={'http://127.0.0.1:8082/static/images/'+ item.logo_id} />}
                              >
                                <Link to={`/read/${item.id}`} state={item.id}> <Meta title={item.name} /></Link>
                              </Card>
                      </List.Item>
                    )}
                />
            </Content>
            <FooterApp />
        </Layout>
    );
}


export default Index;
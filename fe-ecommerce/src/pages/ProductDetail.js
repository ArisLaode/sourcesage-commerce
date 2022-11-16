import React, { useState, useEffect } from 'react';
import {Layout, Row, Col, Divider, List, Card, Space} from 'antd';
import HeaderApp from "../components/Header";
import FooterApp from "../components/Footer";
import Rest from "../utils/Rest";
import {readProduct, readVariant} from '../utils/Config';
import {Link, useParams} from 'react-router-dom';
import Meta from "antd/es/card/Meta";

const { Content } = Layout;

function ProductDetail () {
    let { productId } = useParams();

    const [dataProduct, setDataProduct] = useState([])
    const [dataVariant, setDataVariant] = useState([])

    useEffect(() => {
        Rest.get(`${readProduct}/${productId}`).then((response) => {
            setDataProduct(response);
        });
        Rest.get(`${readVariant}/${productId}`).then((response) => {
            setDataVariant(response);
        });
        }, [productId]);

    return (
        <Layout style={{ minHeight: '95vh' }}>
            <HeaderApp />
            <Content style={{padding: '0 100px', margin: '15px 0 0 0'}}>
                    <Row>
                            <Col span={5} offset={10}>
                                  <Card
                                    hoverable
                                    style={{
                                      width: 280,
                                    }}
                                    cover={<img alt={dataProduct.images} src={'http://127.0.0.1:8082/static/images/'+ dataProduct.images} />}
                                  >
                                    <Meta title={dataProduct.name} description={dataProduct.description} />
                                  </Card>
                            </Col>
                    </Row>
                <Divider>List Variant</Divider>
                <List
                    grid={{
                        gutter: 16,
                        column: 4,
                    }}
                    dataSource={dataVariant}
                    renderItem={(item) => (
                      <List.Item>
                          <Card
                            hoverable
                            style={{
                              width: 290,
                            }}
                            cover={<img style={{width: 290, height: 190}}  alt={item.images} src={'http://127.0.0.1:8082/static/images/'+ item.images} />}
                          >
                            <Link to={`/read/${item.id}`} state={item.id}> <Meta title={item.name} /></Link>
                          </Card>
                          <br/>
                          <Space size={88}>
                              <b>Ukuran  : {item.size}</b>
                              <b>Warna : {item.color}</b>
                          </Space>
                      </List.Item>
                    )}
                />
                  {/*<List*/}
                  {/*    grid={{*/}
                  {/*        gutter: 16,*/}
                  {/*        column: 4,*/}
                  {/*      }}*/}
                  {/*  dataSource={dataVariant}*/}
                  {/*  renderItem={(item) => (*/}
                  {/*    <List.Item>*/}
                  {/*      <Card title={item.name}>*/}
                  {/*        <Image*/}
                  {/*            width={200}*/}
                  {/*            src={'http://127.0.0.1:8082/static/images/'+ item.images}*/}
                  {/*            preview={false}*/}
                  {/*        />*/}
                  {/*          <p>Size  : {item.size}</p>*/}
                  {/*          <p>Color : {item.color}</p>*/}
                  {/*      </Card>*/}
                  {/*    </List.Item>*/}
                  {/*  )}*/}
                  {/*/>*/}
                    {/*<Row gutter={[16, 16]}>*/}
                    {/*  {dataVariant.map((dataVariant, index) => {*/}
                    {/*      return (*/}
                    {/*        <Col key={index} span={8}>*/}
                    {/*            <p>*/}
                    {/*              <b>{dataVariant.name}</b>*/}
                    {/*            </p>*/}
                    {/*            <p>*/}
                    {/*              <Image*/}
                    {/*                width={200}*/}
                    {/*                src={'http://127.0.0.1:8082/static/images/'+ dataVariant.images}*/}
                    {/*                preview={false}*/}
                    {/*              />*/}
                    {/*            </p>*/}
                    {/*            <p>*/}
                    {/*              <b>{dataVariant.size}</b>*/}
                    {/*              <b>{dataVariant.color}</b>*/}
                    {/*            </p>*/}
                    {/*        </Col>*/}
                    {/*   )})}*/}
                    {/*</Row>*/}
            </Content>
            <FooterApp />
        </Layout>
    );
}


export default ProductDetail;
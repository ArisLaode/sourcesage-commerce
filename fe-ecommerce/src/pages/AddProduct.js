import React, { useState, useEffect } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import {
    Button,
    Form,
    Upload,
    Layout, Input, Divider
} from 'antd';
import HeaderApp from "../components/Header";
import FooterApp from "../components/Footer";
import Rest from "../utils/Rest";
import {createProduct} from "../utils/Config";
import axios from "axios";

const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const { Content } = Layout;

function AddProduct() {

    const formData = new FormData();

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        formData.append("name", "Celana Cewek");
        formData.append("description", "Celana cewek adalah brand celana cewek");
        formData.append("images", values.images[0]);
        formData.append("logo", values.logo[0]);
        // await Rest.post(createProduct, formData)
        return await axios.post(createProduct, formData, {
            headers: {
                'Accept': '*',
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
            }
        }).then(response => {
            console.log(response);
        }).catch(e => {
            console.log(e);
        });
    };


    return (
        <Layout style={{ minHeight: '95vh' }}>
            <HeaderApp />
            <Content style={{padding: '0 100px', margin: '30px 0 0 0'}}>
                <p>
                    <Divider orientation="plain"><h2><b>Tambah Produk</b> </h2></Divider>
                </p>
                <Form
                    name="validate_other"
                    {...formItemLayout}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="name"
                        label="Nama Produk"
                        rules={[
                            {
                                required: true,
                                message: 'Masukan nama produk Anda!',
                            },
                        ]}
                    >
                        <Input placeholder="Masukan nama produk Anda" />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Deskripsi"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Intro',
                            },
                        ]}
                    >
                        <Input.TextArea showCount maxLength={100} placeholder="Deskripsikan produk Anda"/>
                    </Form.Item>
                    <Form.Item
                        name="logo"
                        label="Logo"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        extra=""
                    >
                        <Upload name="logo" listType="picture">
                            <Button icon={<UploadOutlined />}>Unggah Logo</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        name="images"
                        label="Gambar"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        extra=""
                    >
                        <Upload name="logo" listType="picture">
                            <Button icon={<UploadOutlined />}>Unggah Gambar</Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            span: 14,
                            offset: 8,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
            <FooterApp />
        </Layout>
    );
}


    export default AddProduct;
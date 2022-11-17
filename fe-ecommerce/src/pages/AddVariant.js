import React, { useState, useEffect } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import {
    Button,
    Form,
    Upload,
    Layout, Input, Divider, Select, notification
} from 'antd';
import HeaderApp from "../components/Header";
import FooterApp from "../components/Footer";
import Rest from "../utils/Rest";
import {createVariant, readProduct} from "../utils/Config";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

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
const openNotificationWithIcon = (type, message) => {
    notification[type]({
        message: `${message}`
    });
};

function AddVariant() {

    const navigate = useNavigate();
    const formData = new FormData();
    const [data, setData] = useState([])
    useEffect(() => {
        Rest.get(readProduct).then((response) => {
            setData(response);
        });}, []);
    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        formData.append("product_id", values.product_id);
        formData.append("name", values.name);
        formData.append("size", values.size);
        formData.append("color", values.color);
        formData.append("images", values.images[0].originFileObj);

        await axios.post(createVariant, formData).then(response => {
            console.log(response);
            navigate('/')
            openNotificationWithIcon('success', response.data.message)
        }).catch(e => {
            console.log(e);
            openNotificationWithIcon('error', 'something wrong!')
        });
    };

    return (
        <Layout style={{ minHeight: '95vh' }}>
            <HeaderApp />
            <Content style={{padding: '0 100px', margin: '30px 0 0 0'}}>
                <p>
                    <Divider orientation="plain"><h2><b>Tambah Varian</b> </h2></Divider>
                </p>
                <Form
                    name="validate_other"
                    {...formItemLayout}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="name"
                        label="Nama Varian"
                        rules={[
                            {
                                required: true,
                                message: 'Masukan nama varian Anda!',
                            },
                        ]}
                    >
                        <Input placeholder="Masukan nama varian Anda" />
                    </Form.Item>
                    <Form.Item
                        name="product_id"
                        label="Kategori Produk"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Pilih kategori produk!',
                            },
                        ]}
                    >
                        <Select placeholder="Pilih kategori produk">
                            {
                                data.map((data) => {
                                    return (
                                        <Option value={data.id}>{data.name}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="size"
                        label="Ukuran"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Pilih ukuran varian!',
                            },
                        ]}
                    >
                        <Select placeholder="Pilih ukuran varian">
                            <Option value="small">Small (S)</Option>
                            <Option value="medium">Medium (M)</Option>
                            <Option value="large">Large (L)</Option>
                            <Option value="xtra-xtra large">Xtra-Xtra Large (XXL)</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="color"
                        label="Warna Varian"
                        rules={[
                            {
                                required: true,
                                message: 'Masukan warna varian Anda!',
                            },
                        ]}
                    >
                        <Input placeholder="Masukan warna varian Anda" />
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
                        {/*<Button type="primary" htmlType="submit" onSubmit={handleFormSubmit}>*/}
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


    export default AddVariant;
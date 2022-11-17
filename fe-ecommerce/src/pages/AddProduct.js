import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import {
    Button,
    Form,
    Upload,
    Layout, Input, Divider, notification
} from 'antd';
import HeaderApp from "../components/Header";
import FooterApp from "../components/Footer";
import Rest from "../utils/Rest";
import {createProduct} from "../utils/Config";
import {useNavigate} from "react-router-dom";


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


function AddProduct() {

    const navigate = useNavigate();
    const formData = new FormData();

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("images", values.images[0].originFileObj);
        formData.append("logo", values.logo[0].originFileObj);

        await Rest.post(createProduct, formData).then(response => {
            console.log(response);
            navigate('/')
            openNotificationWithIcon('success', response.message)
        }).catch(e => {
            openNotificationWithIcon('error', 'something wrong!')
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
'use client'
import { Button, Form, type FormProps, Input, Row, Col } from 'antd';
type FieldType = {
  description: string;
  price: string;
  amount: number;
  brand: string;
  barCode: string;
};

export default function AddProducts() {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      layout='vertical'
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Descrição"
        name="description"
        rules={[{ required: true, message: 'Descrição do produto é obrigatoria!' }]}
      >
        <Input />
      </Form.Item>

      <Row gutter={16}>
        <Col xs={24} lg={8}>
          <Form.Item<FieldType>
            label="Marca"
            name="brand"
            rules={[{ required: true, message: 'Marca do produto é obrigatoria!' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} lg={8}>
          <Form.Item<FieldType>
            label="Preço"
            name="price"
            rules={[{ required: true, message: 'Preço do produto é obrigatoria!' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} lg={8}>
          <Form.Item<FieldType>
            label="Quantidade"
            name="amount"
            rules={[{ required: true, message: 'Quantidade do produto é obrigatoria!' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item<FieldType>
        label="Código de barras"
        name="barCode"
        rules={[{ required: true, message: 'Código de barras do produto é obrigatorio!' }]}
      >
        <Input />
      </Form.Item>

      <Row justify="end">
        <Col>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{boxShadow: 'none'}}>
              Salvar
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

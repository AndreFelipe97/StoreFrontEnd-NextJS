"use client"
import { Button, Col, Form, FormProps, Input, Radio, RadioChangeEvent, Row } from "antd";
import { useState } from "react";

type FieldType = {
  title: string;
  value: string;
  category: string;
};

export default function RegisterTransactions() {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
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
        label="Titulo"
        name="title"
        rules={[{ required: true, message: 'Titulo da transação é obrigatório!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Valor"
        name="value"
        rules={[{ required: true, message: 'Valor da transação é obrigatório!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Categoria"
        name="category"
        rules={[{ required: true, message: 'Categoria da transação é obrigatório!' }]}
      >
        <Input />
      </Form.Item>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>Entrada</Radio>
        <Radio value={2}>Saída</Radio>
      </Radio.Group>

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
  )
}

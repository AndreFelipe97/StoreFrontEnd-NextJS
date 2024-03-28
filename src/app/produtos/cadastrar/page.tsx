'use client'
import { Form } from '@/components/dataEntries/Form/Form';
import { Input } from '@/components/dataEntries/inputs/Input';
import { ProductsContext } from '@/contexts/ProductsContext';
import { Button, Form as FormAntd, Row, Col } from 'antd';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

type FieldType = {
  title: string;
  brand: string;
  price: number;
  amount: number;
  barCode: string;
};

export default function AddProducts() {
  const { handleSubmit, formState: { errors }, register, control } = useForm<FieldType>();

  const { setDataProduct } = useContext(ProductsContext);

  function onSubmit(data: FieldType) {
    const productData = {...data, id: Math.floor(Math.random() * 1000)};
    setDataProduct(productData);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input label="Descrição"
        name="title"
        rules={[{ required: true, message: 'Descrição do produto é obrigatório!' }]} 
        control={control}
        placeholder="Digite a descrição do produto"
        type="text"
      />
      <Row gutter={16}>
        <Col xs={24} lg={8}>
          <Input label="Marca"
            name="brand"
            rules={[{ required: true, message: 'Marca do produto é obrigatório!' }]}
            control={control}
            placeholder="Digite a marca do produto"
            type="text"
          />
        </Col>
        <Col xs={24} lg={8}>
          <Input label="Preço"
            name="price"
            rules={[{ required: true, message: 'Preço do produto é obrigatório!' }]}
            control={control}
            placeholder="Digite o preço do produto!"
            type="text"
          />
        </Col>
        <Col xs={24} lg={8}>
          <Input label="Quantidade"
            name="amount"
            rules={[{ required: true, message: 'Quantidade do produto é obrigatório!' }]}
            control={control}
            placeholder="Digite a quantidade do produto!"
            type="text"
          />
        </Col>
      </Row>
      <Input label="Código de barras"
        name="barCode"
        rules={[{ required: true, message: 'Código de barras do produto é obrigatório!' }]}
        control={control}
        placeholder="Digite o Código de barras do produto!"
        type="text"
      />

      <Row justify="end">
        <Col>
          <FormAntd.Item>
            <Button type="primary" htmlType="submit" style={{boxShadow: 'none'}}>
              Salvar
            </Button>
          </FormAntd.Item>
        </Col>
      </Row>
    </Form>
  );
}

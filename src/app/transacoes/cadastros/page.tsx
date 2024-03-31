"use client"
import { Form } from "@/components/dataEntries/Form/Form";
import { Input } from "@/components/dataEntries/inputs/Input";
import { RadioButton } from "@/components/dataEntries/radioButton/radioButton";
import { TransactionsContext } from "@/contexts/Transactions";
import { Button, Col, Form as FormAntd, Row } from "antd";
import { useContext } from "react";
import { useForm } from "react-hook-form";

type FieldType = {
  title: string;
  value: string;
  category: string;
  transactionType: number;
};

export default function RegisterTransactions() {
  const { handleSubmit, formState: { errors }, register, control } = useForm<FieldType>();

  const { setDataTransaction } = useContext(TransactionsContext);

  function onSubmit(data: FieldType) {
    const transactionData = {...data, 
      id: Math.floor(Math.random() * 1000),
      type: data.transactionType,
      date: new Date(),
      value: Number(data.value.replace(",", "."))
    }
    setDataTransaction(transactionData);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input label="Titulo"
        name="title"
        rules={[{ required: true, message: 'Titulo da transação é obrigatório!' }]} 
        control={control}
        placeholder="Digite o titulo da transação"
        type="text"
      />
      <Input label="Valor"
        name="value"
        rules={[{ required: true, message: 'Valor da transação é obrigatório!' }]}
        control={control}
        placeholder="Digite o valor da transação"
        type="text"
      />
      <Input label="Categoria"
        name="category"
        rules={[{ required: true, message: 'Categoria da transação é obrigatório!' }]}
        control={control}
        placeholder="Digite a categoria da transação"
        type="text"
      />
      <RadioButton name="transactionType" control={control} />

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
  )
}

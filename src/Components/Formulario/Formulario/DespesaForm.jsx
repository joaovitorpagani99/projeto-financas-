import axios from "axios";
import { useState } from "react";
import Botao from "../Botao/Button";
import Input from "../Input/input";
import Select from "../Select/select";
import styles from "./Despesa.module.css";


function DespesaFormulario({ handleSubmit, btnText, despesaData }) {

  const STATUS = ['ABERTO', 'PAGO', 'VENCIDO',]

  const [despesa, setDespesa] = useState(despesaData || 
    { nome: '', descricao: '', valor: '', status: '', dataVencimento: '', });

  const submit = (e) => {
    console.log('submit foi chamado');
    e.preventDefault();
    handleSubmit(despesa);
  }

  function handleChange(e) {
    setDespesa({ ...despesa, [e.target.name]: e.target.value })
  }

  function handleDateChange(e) {
    const selectedDate = e.target.value;
    setDespesa({
      ...despesa,
      dataVencimento: selectedDate,
    });
  }
  function handleStatus(e) {
    const selectedStatus = e.target.value;
    setDespesa({
      ...despesa,
      status: selectedStatus,
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome da despesa"
        name="nome"
        placeholder="Insira o nome da despesa"
        handleOnChange={handleChange}
        value={despesa.nome}
      />
      <Input
        type="number"
        text="Valor da despesa"
        name="valor"
        placeholder="Insira o valor da despesa"
        handleOnChange={handleChange}
        value={despesa.valor}
      />

      <Input
        type="text"
        text="Descrição da despesa"
        name="descricao"
        placeholder="Descrição"
        handleOnChange={handleChange}
        value={despesa.descricao}
      />

      <Select
        name="status"
        text="selecione status da despesa"
        options={STATUS}
        handleOnChange={handleStatus}
        value={despesa.status}
      />


      <Input
        type="date"
        name="dataVencimento"
        text="Data de Vencimento"
        placeholder="Insira a data de vencimento"
        handleOnChange={handleDateChange}
        value={despesa.dataVencimento}
      />

      <Botao btnText={btnText} type="submit" />
    </form>
  );
}

export default DespesaFormulario;

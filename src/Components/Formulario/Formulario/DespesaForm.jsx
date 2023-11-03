import axios from "axios";
import { useEffect, useState } from "react";
import Botao from "../Botao/Button";
import Input from "../Input/input";
import Select from "../Select/select";
import styles from "./Despesa.module.css";


function DespesaFormulario({ btnText }) {

  const [despesa, setDespesa] = useState([])

  const getDespesas = async () => {
    try {
      const response = await axios.get("http://localhost:3000/despesas");
      console.log('response.data');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
  
  }, [])
  


  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome da despesa"
        name="name"
        placeholder="Insira o nome da despesa"
      />
      <Input
        type="number"
        text="Valor da despesa"
        name="valor"
        placeholder="Insira o valor da despesa"
      />
      <Input
        type="date"
        text="Data da despesa"
        placeholder="Insira a data da despesa"
      />
      <Select name="despesa_id" text="selecione status da despesa" />
      <Botao  btnText={btnText}/>
    </form>
  );
}

export default DespesaFormulario;

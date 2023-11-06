import React from "react";
import DespesaFormulario from "../../Components/Formulario/Formulario/DespesaForm";
import styles from "./NovaDespesa.module.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import Alert from "../../Components/Alert/SwalAlert";

const NovaDespesa = () => {

  const navigate  = useNavigate();

  function createDespesa(despesa) {
    despesa.cost = 0;
    despesa.service = [];
    console.log(despesa);
    axios.post("http://localhost:8080/despesa", despesa)
      .then((resultado) => {
        navigate("/despesa")
        Alert("Despesa criada com sucesso!", "success");
        
      })
      .catch((error) => {
        console.error('Erro na solicitação:', error);
        Alert('Erro ao cadastrar despesa:',  "error");
      });
  }

  return (
    <div className={styles.despesa_container}>
      <h1> Criar uma Despesa</h1>
      <p>crie sua despesa</p>
      <DespesaFormulario handleSubmit={createDespesa} btnText="Criar despesa" />
    </div>
  );
};

export default NovaDespesa;

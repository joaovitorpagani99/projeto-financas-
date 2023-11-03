import React from "react";
import DespesaFormulario from "../../Components/Formulario/Formulario/DespesaForm";
import styles from "./despesa.module.css";


const Despesa = () => {
  return (
    <div className={styles.despesa_container}>
      <h1> Criar uma Despesa</h1>
      <p>crie sua despesa</p>
      <DespesaFormulario btnText="Criar despesa"/>
    </div>
  );
};

export default Despesa;

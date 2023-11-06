import React from "react";
import { useLocation } from "react-router-dom";

import Mensagem from "../../Components/Alert/Mensagem";

function Despesa () {
  
  const location = useLocation();
  
  let mensagem = ''
  
  if(location.state){
    mensagem = location.state.mensagem
  }

  return (
    <div >
      <h1>Despesa</h1>
       {mensagem && <Mensagem type="sucess" msg={mensagem} /> }
    </div>
  );
};

export default Despesa;

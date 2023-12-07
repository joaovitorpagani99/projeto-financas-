import style from '../../Components/Table/table.module.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tabela = () => {

    const [despesas, setDespesas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/despesa')
            .then((response) => {
                setDespesas(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <div className={style.table_despesa} >
            <table className="table-hover">
                <thead>
                    <tr>
                        <th>Despesa</th>
                        <th>Valor</th>
                        <th>Status</th>
                        <th>Descrição</th>
                        <th>Data de Criação</th>
                        <th>Data de Vencimento</th>
                    </tr>
                </thead>
                <tbody>
                    {despesas.map((despesa) => (
                        <tr >
                            <td>{despesa.nome}</td>
                            <td>{despesa.valor}</td>
                            <td>{despesa.status}</td>
                            <td>{despesa.descricao}</td>
                            <td>{despesa.dataCriacao}</td>
                            <td>{despesa.dataVencimento}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Tabela;
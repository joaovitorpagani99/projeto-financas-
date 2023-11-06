import syles from './Home.module.css';
import image from  '../../img/img1.png';
import LinkButton from '../../Components/LinkButton/LinkButton';

const Home = () => {
    
    return (
        <section className={syles.home_container}>
            <h1>Bem Vindo ao <span>Pagani Finanaças</span></h1>
            {/*, onde você pode cadastrar suas despesas e receitas, e ter uma visão geral de como anda suas finanças.*/}
            <p>Este é um sistema de controle de finanças</p>
            <LinkButton  to="/novaDespesa"  text="Criar Despesa"/>
            <img src= {image} alt="despesas"/>
        </section>
    )
}

export default Home;
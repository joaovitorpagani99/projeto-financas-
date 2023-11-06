import Button from 'react-bootstrap/Button';


function Botao ({btnText, type}) {
    return (
        <Button variant="outline-secondary" type={type}>{btnText}</Button>
    )
}

export default Botao;
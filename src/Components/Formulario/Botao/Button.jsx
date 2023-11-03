import Button from 'react-bootstrap/Button';


function Botao ({btnText}) {
    return (
        <Button variant="outline-secondary">{btnText}</Button>
    )
}

export default Botao;
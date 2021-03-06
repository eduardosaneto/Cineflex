import { Link } from 'react-router-dom';

export default function Success({ 
    sessionData,
    sessionDateData,
    movieData,
    selectedSeats,
    name,
    cpf,
    eraseData
}) {

    return (
        <>
            <span className="success-title">
                <h1>Pedido feito <br/>com sucesso!</h1>
            </span>
            <div className="info">
                <h2>Filme e sessão</h2>
                <p>{movieData.title}</p>
                <p>{sessionDateData.weekday} {sessionData.name}</p>
            </div>
            <div className="info">
                <h2>Ingressos</h2>
                {selectedSeats.map(item => (
                    <p>Assento {item}</p>
                ))}
            </div>
            <div className="info">
                <h2>Comprador</h2>
                <p>{name}</p>
                <p>{cpf.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-")}</p>
            </div>
            <Link className="link" to="/">
                <button onClick={eraseData}>Voltar para a Home</button>
            </Link>
        </>
    );
}
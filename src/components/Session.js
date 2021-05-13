import Footer from './Footer';

export default function Session() {
    return (
        <>
            <span><h1>Selecione o(s) assento(s)</h1></span>
            <ul className="session-seats">
                <li className="seat">
                    <p>01</p>
                </li> 
            </ul>
            <div className="label">
                <div className="label-option">
                    <div className="legend selected"></div>
                    <p>Selecionado</p>
                </div>
                <div className="label-option">
                    <div className="legend available"></div>
                    <p>Disponível</p>
                </div>
                <div className="label-option">
                    <div className="legend unavailable"></div>
                    <p>Indisponível</p>                    
                </div>
            </div>
            <div><h3>Nome do comprador</h3></div>
            <input type="text" placeholder="Digite seu nome..." value=""/>
            <div><h3>CPF do comprador</h3></div>
            <input type="number" placeholder="Digite seu CPF..." value=""/>
            <button>Reservar assento(s)</button>
            <Footer />
        </>
    );
}
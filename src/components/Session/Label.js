export default function Label() {
    return (
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
    );
}
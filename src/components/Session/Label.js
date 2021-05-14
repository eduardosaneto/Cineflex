export default function Label() {

    const labelType = [
        {
            class: "selected",
            name: "Selecionado"
        },
        {
            class: "available",
            name: "Disponível"
        },
        {
            class: "unavailable",
            name: "Indisponível"
        }
    ]
    
    return (
        <div className="label">
            {labelType.map(item => (
                <div className="label-option">
                    <div className={`legend ${item.class}`}></div>
                    <p>{item.name}</p>
                </div>    
            ))}
        </div>
    );
}
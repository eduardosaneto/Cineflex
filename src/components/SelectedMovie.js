import Footer from './Footer';

export default function SelectedMovie() {
    return (
        <>
            <span><h1>Selecione o horário</h1></span>
            <ul className="sessions">
                <li>
                    <div className="date">
                        <h2>
                            Quinta-feira - 24/06/2021
                        </h2>
                    </div>
                    <div className="schedules">
                        <div>
                            <p>15:00</p>
                        </div>
                        <div>
                            <p>19:00</p>
                        </div>    
                    </div>
                </li>
            </ul>
            <Footer />
        </>
    );
}
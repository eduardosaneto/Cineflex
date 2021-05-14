import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import Seat from './Session/Seat';
import Label from './Session/Label';
import Footer from './Footer';

export default function Session({ 
    sessionData, setSessionData,
    sessionDateData, setSessionDateData,
    movieData, setMovieData,
    selectedSeats, setSelectedSeats,
    name, setName,
    cpf, setCpf,
}) {

    const [seats, setSeats] = useState([]);
    const { sessionId } = useParams();
    let disabled = true;

    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionId}/seats`);        
        request.then(response => {
            setSessionData(response.data);
            setSessionDateData(response.data.day);
            setMovieData(response.data.movie);
			setSeats(response.data.seats);            
		});
        request.catch(() => {
            alert("There has been an error. Please try reload this page");
        });
    }, []);

    if(name !== "" && cpf !== "" && selectedSeats.length > 0) {
        disabled = false;
    };

    function sendReservation(data) {
        const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`, data);
        request.then(() => {
            alert("Your reservation was successfully made");
        });
    } 

    function reservation() {
        const reservationData = {
            ids: selectedSeats,
            name: name,
            cpf: cpf
        };       
        sendReservation(reservationData);
    }

    return (
        <>
            <span><h1>Selecione o(s) assento(s)</h1></span>
            <ul className="session-seats">
                {seats.map(seat => (
                    <Seat
                        key={seat.id} 
                        id={seat.id} 
                        isAvailable={seat.isAvailable}
                        selectedSeats={selectedSeats}
                        setSelectedSeats={setSelectedSeats}
                    />
                ))}
            </ul>
            <Label />
            <div><h3>Nome do comprador</h3></div>
            <input 
                type="text" placeholder="Digite seu nome..." value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div><h3>CPF do comprador</h3></div>
            <input 
                type="text" placeholder="Digite seu CPF..." value={cpf}
                onChange={(e) => setCpf(e.target.value)}
            />
                <Link className="button" to="/success">
                    <button 
                        className={`${disabled ? "deactive" : ""}`} 
                        disabled={disabled} 
                        onClick={reservation}
                    >
                        Reservar assento(s)
                    </button>
                </Link>
            <Footer 
                key={sessionData.id} 
                poster={movieData.posterURL} 
                title={movieData.title}
                date={sessionDateData.weekday}
                hour={sessionData.name}
            />
        </>
    );
}
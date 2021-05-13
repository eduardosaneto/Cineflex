import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import Seat from './Session/Seat';
import Label from './Session/Label';
import Footer from './Footer';

export default function Session() {

    const [seats, setSeats] = useState([]);
    const [movieData, setMovieData] = useState([]);
    const { sessionId } = useParams();

    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionId}/seats`);
        request.then(response => {
            setMovieData(response.data.movie);
			setSeats(response.data.seats);            
		});
        request.catch(error => {
            alert("There has been an error. Please try reload this page");
        });
    }, []);

    return (
        <>
            <span><h1>Selecione o(s) assento(s)</h1></span>
            <ul className="session-seats">
                {seats.map(seat => (
                    <Seat id={seat.id} isAvailable={seat.isAvailable} 
                    />
                ))}
            </ul>
            <Label />
            <div><h3>Nome do comprador</h3></div>
            <input type="text" placeholder="Digite seu nome..." value=""/>
            <div><h3>CPF do comprador</h3></div>
            <input type="number" placeholder="Digite seu CPF..." value=""/>
            <button>Reservar assento(s)</button>
            <Footer key={movieData.id} poster={movieData.posterURL} title={movieData.title}/>
        </>
    );
}


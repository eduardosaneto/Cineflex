import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import Seat from './Session/Seat';
import Label from './Session/Label';
import Footer from './Footer';

export default function Session() {

    const [seats, setSeats] = useState([]);
    const [movieData, setMovieData] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [selectedSeats, setSelectedSeats] = useState([]);
    const { sessionId } = useParams();

    console.log(selectedSeats);

    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionId}/seats`);
        
        request.then(response => {
            setMovieData(response.data.movie);
			setSeats(response.data.seats);            
		});
        request.catch(() => {
            alert("There has been an error. Please try reload this page");
        });
    }, []);

    function reservation() {
        
        const reservationData = {
            ids: selectedSeats,
            name: name,
            cpf: cpf
        };

        const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`, reservationData);
        request.then(response => {
            alert("Your reservation was successfully made");
        });
        request.catch(() => {
            if(selectedSeats.lentgh === 0){
                alert("Please, select at least one seat");
            } else if (name === "" || cpf === "") {
                alert("Please, insert your Name and CPF");
            }
        });    
    }

    return (
        <>
            <span><h1>Selecione o(s) assento(s)</h1></span>
            <ul className="session-seats">
                {seats.map(seat => (
                    <Seat 
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
            <Link to="/success">
                <button onClick={reservation}>
                    Reservar assento(s)
                </button>
            </Link>
            <Footer key={movieData.id} poster={movieData.posterURL} title={movieData.title}/>
        </>
    );
}


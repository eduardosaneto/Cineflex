import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';

export default function SelectedMovie() {

    const [sessionsData, setsessionsData] = useState([]);
    const [movieData, setMovieData] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${movieId}/showtimes`);
        request.then(response => {
            setMovieData(response.data);
			setsessionsData(response.data.days);            
		});
        request.catch(error => {
            alert("There has been an error. Please try reload this page");
        });
    }, []);

    return (
        <>
            <span><h1>Selecione o horário</h1></span>
            <ul className="sessions" >
                {sessionsData.map(sessions => (
                    <li >
                        <div className="date" key={sessions.id}>
                            <h2>{sessions.weekday} {sessions.date}</h2>
                        </div>
                        <div className="schedules">
                            {sessions.showtimes.map(schedules => (
                                <Link to={`/session/${schedules.id}`}>
                                    <div>
                                        <p>{schedules.name}</p>
                                    </div>   
                                </Link>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
            <Footer 
                key={movieData.id} 
                poster={movieData.posterURL} 
                title={movieData.title}
                date=""
                hour=""
                />
        </>
    );
}
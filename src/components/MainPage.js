import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function MainPage() {

    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
        request.then(response => {
			setMoviesData(response.data);
		});
        request.catch(error => {
            alert("There has been an error. Please try again in a feel minutes");
            console.log(error);
        });
    },[])

    return (
        <>
            <span><h1>Selecione o Filme</h1></span>
            <ul className="cinema-options">
                {moviesData.map(movie => (
                    <Link to={`/movie/${movie.id}`}>
                        <li key={movie.id}>
                            <img src={movie.posterURL} alt={movie.title}/>
                        </li>
                    </Link>
                ))}
            </ul>
        </>
    );
}
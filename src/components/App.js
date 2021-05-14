import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {useState} from 'react';
import Header from './Header';
import MainPage from './MainPage';
import SelectedMovie from './SelectedMovie';
import Session from './Session';
import Success from './Success';

export default function App() {

    const [sessionData, setSessionData] = useState([]);
    const [sessionDateData, setSessionDateData] = useState([]);
    const [movieData, setMovieData] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    function eraseData() {
        setSessionData([]);
        setSessionDateData([]);
        setMovieData([]);
        setSelectedSeats([]);
        setName("");
        setCpf("");
    }

    return (
        <>
            <BrowserRouter>
                <Header />
                <section>
                    <Switch>
                        <Route path="/" exact>
                            <MainPage />
                        </Route>
                        <Route path="/movie/:movieId" exact>
                            <SelectedMovie />
                        </Route>
                        <Route path="/session/:sessionId" exact>
                            <Session 
                                sessionData={sessionData} 
                                setSessionData={setSessionData}
                                sessionDateData={sessionDateData} 
                                setSessionDateData={setSessionDateData}
                                movieData={movieData} 
                                setMovieData={setMovieData}
                                selectedSeats={selectedSeats} 
                                setSelectedSeats={setSelectedSeats}
                                name={name} 
                                setName={setName}
                                cpf={cpf} 
                                setCpf={setCpf}
                            />
                        </Route>
                        <Route path="/success" exact>
                            <Success
                                sessionData={sessionData} 
                                sessionDateData={sessionDateData} 
                                movieData={movieData} 
                                selectedSeats={selectedSeats} 
                                name={name} 
                                cpf={cpf}
                                eraseData={eraseData} 
                            />
                        </Route>
                    </Switch>
                </section>
            </BrowserRouter>
        </>
    );
}
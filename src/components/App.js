import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {useState} from 'react';
import Header from './Header';
import MainPage from './MainPage';
import SelectedMovie from './SelectedMovie';
import Session from './Session';
import Success from './Success';

export default function App() {

    const [movieData, setmovieData] = useState([]);



    return (
        <>
            <Header />
            <section>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            <MainPage />
                        </Route>
                        <Route path="/movie/:movieId" exact>
                            <SelectedMovie />
                        </Route>
                        <Route path="/session/:sessionId" exact>
                            <Session />
                        </Route>
                        <Route path="/success" exact>
                            <Success/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </section>
        </>
    );
}
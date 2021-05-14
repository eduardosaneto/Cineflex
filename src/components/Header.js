import { Link, useLocation, useHistory } from 'react-router-dom';
import { BsBoxArrowLeft } from "react-icons/bs";

export default function Header() {

    const location = useLocation();
    const history = useHistory();

    function goBack() {
        history.goBack();
    }

    if(location.pathname !== "/" && location.pathname !== "/success"){
        return (
            <header>
                <BsBoxArrowLeft className="return" onClick={goBack}/>
                <Link to="/">
                    <h1>CINEFLEX</h1>
                </Link>
            </header>
        );
    } else {
        return (
            <header>
                <Link to="/">
                    <h1>CINEFLEX</h1>
                </Link>
            </header>
        );
    }


}
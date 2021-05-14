import { Link, useHistory } from 'react-router-dom';
import { BsBoxArrowLeft } from "react-icons/bs";

export default function Header() {

    const history = useHistory();

    function goBack() {
        history.goBack();
    }

    return (
        <header>
            <BsBoxArrowLeft className="return" onClick={goBack}/>
            <Link to="/">
                <h1>CINEFLEX</h1>
            </Link>
        </header>
    );
}
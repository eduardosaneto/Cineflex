import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <ion-icon name="caret-back-outline"></ion-icon>
            <Link to="/">
                <h1>CINEFLEX</h1>
            </Link>
        </header>
    );
}
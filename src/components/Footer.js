export default function Footer({poster, title}) {

    return (
        <footer>
            <div>
                <img src={poster} alt={title} />
            </div>
            <h3>{title}</h3>
        </footer>
    );
}
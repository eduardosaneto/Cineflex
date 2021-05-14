export default function Footer({poster, title, date, hour}) {

    return (
        <footer>
            <div className="movie-info">
                <img src={poster} alt={title} />
            </div>
            <div className="session-info">
                <h3>{title}</h3>
                <h3>{date} - {hour}</h3>
            </div>            
        </footer>
    );
}
import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

export default function Seat({id, isAvailable}) {

    const [isSelected, setIsSelected] = useState(false);

    function chooseSeat(){
        if(!isSelected){
            setIsSelected(true);
        }
        else {
            setIsSelected(false);
        }
    }

    return (
        <li className={`
            ${isAvailable ? "available" : "unavailable"} 
            ${isSelected ? "selected" : ""}
            `}
            onClick={chooseSeat}
        >
            <p>{id}</p>
        </li>            
    );
}
import { useState } from 'react';

export default function Seat({id, isAvailable, selectedSeats, setSelectedSeats}) {

    const [isSelected, setIsSelected] = useState(false);

    function selectAvailableSeat(){
        if(!isSelected){            
            setIsSelected(true);
            setSelectedSeats([...selectedSeats, id]);
        }
        else {
            setIsSelected(false);
            setSelectedSeats(selectedSeats.filter(item => {
                if(item !== id) return item;    
            }));            
        }
    }

    function selectSeat(){
        if(!isAvailable){
            alert("This seat is no longer available");
        } else {
            selectAvailableSeat();
        }
    }

    return (
        <li className={`
            ${isAvailable ? "available" : "unavailable"} 
            ${isSelected ? "selected" : ""}
            `}
            onClick={selectSeat}
        >
            <p>{id}</p>
        </li>            
    );
}
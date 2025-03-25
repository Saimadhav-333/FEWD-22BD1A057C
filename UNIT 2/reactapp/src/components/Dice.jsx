import {useState} from 'react';
import Genimg from './Genimg';
function Dice(){
    let [dice, setDice] = useState({d1:-1, d2:-1});
    function handleSubmit(e){
        const d1 = Math.floor(Math.random() * 6)+1;
        const d2 = Math.floor(Math.random() * 6)+1;
        setDice( {d1:d1, d2:d2});
    }
    return(
        <div>
            <h1>Roll the dice!</h1>
            <button onClick={handleSubmit}>Roll up!</button>
            <Genimg a={dice.d1} b={dice.d2}/>
        </div>
    )
}

export default Dice;
import { Link } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText"

function PlayGame() {
     
    return (
        <div>
            <h1>Play Game</h1>
            
            <MaskedText text={"humble"} usedLetters={['b' , 'e']} />
            <hr/>

        

            <Link to='/start' className="text-blue-600 underline hover:text-blue-700"> Start Game </Link>
        </div>
    );

    }


export default PlayGame;
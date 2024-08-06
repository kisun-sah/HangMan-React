import { getAllCharacters } from "./MakedTextUtility";

/**
 * 
 * @param {text} The word to be guessed 
 * @param {usedLetters} The array of letters that have been guessed so far
 * @returns 
 */
// eslint-disable-next-line react/prop-types
function MaskedText({ text, usedLetters }) {
    const letters = getAllCharacters(text, usedLetters).split('');
    return (
        <>
            {letters.map((letter, index) => {
                return (
                    <span key={`letter-${index}`} className="inline-block mx-1 ">{letter}</span>
                )
            })}
        </>
    )
}



export default MaskedText;

// H U M B L E (B and E are Guessed) -> _ _ _ B _ E
// Presentation component 
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

// eslint-disable-next-line react/prop-types
function TextInputForm ({handleFormSubmit , handleTextInputChange , value , inputType , setInputType}){
    return (
        <form className="flex item-end" onSubmit={handleFormSubmit}>
            <div className="mr-2 flex-1">
                <TextInput
                lebel="Enter a word or phrase"
                type={inputType}
                value={value}
                onChange={handleTextInputChange}
                />

            </div>

            <div>
                <Button
                styleType="warning"
                text={inputType === 'password' ? 'show' : 'Hide'}
                onClickHandler={ () => setInputType(inputType === 'password' ? 'text' : 'password')}

                />
            </div>

            <div>
                <Button 
                text="ok"
                buttonType="submit"
                
                />
            </div>
        </form>
    );
}
export default TextInputForm;
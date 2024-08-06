import { useState } from "react";
import TextInputForm from "./TextInputForm";

//container component for TextInputForm
// eslint-disable-next-line react/prop-types
function TextInputFormContainer({onSubmit}){
    const [value , setvalue] = useState('');
    const [inputType , setInputType] = useState('password');

    function handleFormSubmit(event){
        event.preventDefault();
        console.log('Form submitted ' , value);
        onSubmit ?.(value); // if onSubmit is defined , call it with the value 

    }
   
    function handleTextInputChange(event ){
        console.log('Text input changed');
        console.log('event.target.value');
        setvalue(event.target.value); //whenever I Type in the input field , it will update the value 
    }

    return(
        //calling the presentation layer 
        <TextInputForm 
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
        value={value}
        inputType={inputType}
        setInputType={setInputType}
        />
    );

}
export default TextInputFormContainer;
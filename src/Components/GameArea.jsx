import React, { useState } from "react";
import CardContainer from "./CardContainer";
import HintContainer from "./HintContainer";
import OptionsContainer from "./OptionsContainer";
import ModalScreen from "./UI/ModalScreen";

const optionsNamesArray= ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN"];

const randomNumber= () =>{
    return Math.floor(Math.random() * 11);
}

function GameArea(){

    const [ranNumGenerated, setRanNumGenerated]= useState(randomNumber());
    const [optionIdUserClicked, setOptionIdUserClicked]= useState();
    const [modalMessage, setModalMessage]= useState({});
    const [showHintBtn, setShowHintBtn]= useState(false);
    const showHints={
        hintName: optionsNamesArray[ranNumGenerated],
        hintCharsLength: optionsNamesArray[ranNumGenerated].length
    };

    console.log(optionsNamesArray[ranNumGenerated]);
    console.log(optionsNamesArray[ranNumGenerated].length);
function getIdHandeler(id){
 
    setOptionIdUserClicked(preVal =>{
        if(preVal === undefined){
            setModalMessage(preValMsg =>{
                if(ranNumGenerated === id){
                    return{
                        ...preValMsg,
                        title: "Good Job",
                        message: "CORRECT"
                    }  
                }else{
                    setShowHintBtn(true);
                    console.log(optionsNamesArray[ranNumGenerated]);
                    return{
                        ...preValMsg,
                        title: "Try Again",
                        message: "WRONG"
                    }
                    
                }
            })
        }
       return preVal = id;
    })
    
}

function modalBtnHandeler(btnPressedOnModal){
    setOptionIdUserClicked(preVal =>{
        if(btnPressedOnModal === "Next"){
            setRanNumGenerated(preRanVal =>{
                setShowHintBtn(false);
               return preRanVal = randomNumber();
            });
            preVal = undefined;
        }else{
            preVal = undefined;
        }
    })
}

    return (
    <div>
        {optionIdUserClicked !== undefined && <ModalScreen message= {modalMessage} btnClicked= {modalBtnHandeler}/>}
    <div className="d-flex flex-column justify-content-center text-center my-5">
        <CardContainer number= {ranNumGenerated} />
        {showHintBtn && <HintContainer hintValues= {showHints}/>}
        <OptionsContainer options= {optionsNamesArray} onGetId= {getIdHandeler}/>
    </div>
    </div>

    );
}

export default GameArea;
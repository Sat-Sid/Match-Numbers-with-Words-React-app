import React, {useState} from "react";

function HintContainer(props) {

  const underScoreString = "_ ";
  const timesToPrint= props.hintValues.hintCharsLength;
  const lastChar = props.hintValues.hintName.slice(timesToPrint - 1);
  const [isClicked, setIsClicked]= useState(false);

  function handelHintBtnClick(){
    setIsClicked(true);
  }

  return (
    <div className="d-flex justify-content-center my-4">
      <div>
        <button className="btn btn-primary" onClick= {handelHintBtnClick}>Hint</button>
      </div>
      <div className="">
        {isClicked && <h4 className= "ms-4 hintUnderScoreHeading">{`${underScoreString.repeat(timesToPrint -1 )} ${lastChar}`}</h4>}
      </div>
    </div>
  );
}

export default HintContainer;

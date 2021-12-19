import React from "react";
// import Options from "./Options";

function OptionsContainer(props) {

  return (
    <div>
      <div className="container border border-2 p-4 rounded my-5 shadow">
        <div className="d-flex flex-wrap">
          {props.options.map((eachOptions, index) => (
            <div className="flex-fill m-2 p-2 optionsStyle eachOption"
              key={index}
              id={index}
              onClick={()=>{
               props.onGetId(index);
              }}
            >
              <p>{eachOptions}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OptionsContainer;

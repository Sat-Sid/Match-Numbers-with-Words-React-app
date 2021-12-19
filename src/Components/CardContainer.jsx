import React from "react";
import Card from "./Card";
import DefaultTextArea from "./DefaultTextArea";

function CardContainer(props) {
  
  return (
      <div className="mx-auto w-50">
        <Card>
          <div className="position-absolute top-50 start-50 translate-middle">
            <h1>{props.number}</h1>
          </div>
        </Card>
        <DefaultTextArea />
      </div>
 
  );
}

export default CardContainer;

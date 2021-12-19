import React from "react";
// import "../../public/styles.css"

function Card(props){
    return (
        <div className= "position-relative mx-auto customCard mb-4 border border-3 shadow">{props.children}</div>
    );
}

export default Card;
import React from "react";
import "./styleCard.css";

class CardHoly extends React.Component{
    render(){
        return(
<React.Fragment>
<div className="col-4">
    <div className="cardHoly">
        <img className="imgHoly img-fluid" src={this.props.img} alt="" />
        <h1 className="titleHoly">{this.props.title}</h1>
    </div>
</div>
</React.Fragment>
        );
    }
}

export default CardHoly; 
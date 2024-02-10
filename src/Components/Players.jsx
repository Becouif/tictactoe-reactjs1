import React, { useState } from "react";
import "./Players.css"

import circleIcon from "../Components/Assets/circle.png";
import crossIcon from "../Components/Assets/cross.png";



function Players(){

  var data = new Array(9);
  // console.log(data);


let [count, setCount] = useState(0);

let [currentPlayer, setCurrentPlayer] = useState("circle player (O) turn");



  let toggle = (e,index) => {
    if (count % 2 === 0) {
      e.target.innerHTML = `<img className="innerImg" src="${circleIcon}" />`;
      data[index] = "o";
      setCurrentPlayer("circle player (O)")
      setCount(++count)
    }else {
      e.target.innerHTML = `<img className="innerImg" src="${crossIcon}" />`;
      data[index] = "x"
      setCurrentPlayer("cross player (X)")
      setCount(++count)
    }
  }

  return (
    <div className="players">
      <h1 className="title"><span className="title0">Tic-</span><span className="title1">Tac-</span><span className="title2">Toe</span> made with<span className="tool"> React</span></h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
        </div>
        <button className="resetbtn">Reset</button>
      </div>
      <div className="currentplayer">
        <p className="player">current player:{currentPlayer}</p>
      </div>
    </div>
  )
}


export default Players;


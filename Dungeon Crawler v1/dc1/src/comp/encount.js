import React, { Component } from "react";

export default class Encounter extends React.Component {
  constructor(props) {
    super(props);
    this.encounter = Math.floor(Math.random * 3);
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
             if (this.encounter === 1){
               console.log('A monster has appeared');
             }else if (this.encounter === 2){
              console.log('You got away this time');
             }else{
               console.log('You escaped');
             }
          }}
        >
          Encounter?
        </button>
      </>
    );
  }
}

//The encounter is a 1 in 3 shot of generating a monester
//the random num works
//it needs a reset so it doesnt choose the same every time

import React, { Component } from 'react';
import Camera from '../../components/camera/camera';
import TrackFaces from '../../components/track-faces/track-faces';
import './main.css';

interface IState {
  blob: any;
}

export default class Main extends Component<{},IState> {

  readonly state:IState = {
    blob: null,
  }

  private currentNumberOfPeople = 0;

  private callback = (faces:any[])=>{
    if(faces.length != this.currentNumberOfPeople) {     
      this.currentNumberOfPeople = faces.length
      console.log(this.currentNumberOfPeople);
    }
  };

  dimention = {
    width: "640px",
    height: "480px"
  };
  
  render() {
    return (
      <div className="container">     
        <Camera dimention={this.dimention}/> 
        <TrackFaces callback={this.callback} dimention={this.dimention}/> 
       
      </div> 
    );
  }
}
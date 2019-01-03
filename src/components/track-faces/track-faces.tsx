import React, { Component } from 'react';
import "./track-faces.css"
import { SpawnSyncOptionsWithStringEncoding } from 'child_process';

declare global {
    interface Window { 
       tracking: any;
       dat:any;
    }
}

interface IDimention {
    width: string;
    height: string;
}

declare const dat;

interface IProps {
    dimention: IDimention;
    callback: (faces: any[])=>void
}

interface IState {

}

export default class TrackFaces extends Component<IProps, IState> {
    video:any;
    tracker:any;

    constructor(props) {
        super(props);       
    }

    componentDidMount() {
        const that = this;
        window.onload = (function() {
            
            var video = document.getElementsByTagName('video')[0];
            var canvas:any = document.getElementById('canvas');
            var context = canvas.getContext('2d');
            var tracker = new tracking.ObjectTracker('face');
            
            tracker.setInitialScale(2);
            tracker.setStepSize(2);
            tracker.setEdgesDensity(0.1);
        
            tracking.track(video, tracker);
           
            tracker.on('track', function(event) {
              context.clearRect(0, 0, canvas.width, canvas.height);
            
              const data = event.data; 
          
              that.props.callback(data);              
              data.forEach(function(rect) {
                  context.strokeStyle = '#a64ceb';
                  context.strokeRect(rect.x, rect.y, rect.width, rect.height);
                  context.font = '11px Helvetica';
                  context.fillStyle = "#fff";
                  context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
                  context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
                });
                  
            });
          });  
    }
    
  

    render() {
        return (<canvas width={this.props.dimention.width} height={this.props.dimention.height} id="canvas"></canvas>);
    }
}


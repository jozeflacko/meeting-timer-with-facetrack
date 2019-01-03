import React, { Component } from 'react';
import CameraPlugin from 'react-camera';
import './camera.css';

interface IDimention {
    width: string;
    height: string;
}
interface IProps {   
    dimention: IDimention;
}
interface IState {

}

export default class Camera extends Component<IProps, IState> {

    private camera: any;
    
    constructor(props: IProps) {
        super(props);      
    }

    render() {
        return (           
            <CameraPlugin
                ref={(cam: any) => {
                    this.camera = cam;
                }}
                style={{
                    width: this.props.dimention.width,
                    height: this.props.dimention.height,
                    display: "inline-block",
                    position: "absolute",
                    top:"0px",
                    left:"0px"
                }}                            
            >
            </CameraPlugin>
        );
    }
}
import React from 'react';
import './Video.css';

export class Video extends React.Component {
    render() {
        return (
            <div className='VideoContainer'>
                <iframe width="560" height="315" src= { this.props.src } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        );
    }
}
import React from 'react';
import './Menu.css'

export class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const text = e.target.value;
        this.props.chooseVideo(text);
    }

    render() {
        return (
            <div class="MenuContainer">
            <form class="Menu" onClick = { this.handleClick } >
                <div class="track">📀 Yellow Cloud<input type="radio" name="src" value="YellowCloud" /></div>
                <div class="track">📀 Video Games<input type="radio" name="src" value="VideoGames" /></div>
                <div class="track">📀 C'Mon Loretta<input type="radio" name="src" value="CmonLoretta" /></div>
                <div class="track">📀 Little Sister<input type="radio" name="src" value="LittleSister" /></div>
                <div class="track">📀 Moving Parts<input type="radio" name="src" value="MovingParts" /></div>
            </form>
        </div>
        );
    }
}
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
                <div>📀 Yellow Cloud<input type="radio" name="src" value="YellowCloud" /></div>
                <div>📀 Video Games<input type="radio" name="src" value="VideoGames" /></div>
                <div>📀 C'Mon Loretta<input type="radio" name="src" value="CmonLoretta" /></div>
                <div>📀 Little Sister<input type="radio" name="src" value="LittleSister" /></div>
                <div>📀 Moving Parts<input type="radio" name="src" value="MovingParts" /></div>
            </form>
        </div>
        );
    }
}
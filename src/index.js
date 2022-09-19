import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './Header';
import { Menu } from './Menu'
import { Video } from './Video';
import reportWebVitals from './reportWebVitals';

const Videos = {
  YellowCloud: "https://www.youtube.com/embed/VwaHeZwfGB0",
  VideoGames: "https://www.youtube.com/embed/XeIHmYg7DJ0",
  CmonLoretta: "https://www.youtube.com/embed/gR1pslYotM4",
  LittleSister: "https://www.youtube.com/embed/Eonq7PRPIqY",
  MovingParts: "https://www.youtube.com/embed/GriUtZPC_F4"
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: Videos.YellowCloud };
    this.chooseVideo = this.chooseVideo.bind(this);
  }

  chooseVideo(newVideo) {
    this.setState({
      src: Videos[newVideo]
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div class='player'>
          <Menu chooseVideo={this.chooseVideo} />
          <Video src={this.state.src} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

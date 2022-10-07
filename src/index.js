import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './Components/Header/Header';
import { Menu } from './Components/Menu/Menu'
import { Video } from './Components/Video/Video';

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
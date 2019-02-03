//렌더링 : 컴포넌트를 html에 올린다는 말
//react : 어떻게 렌더링 되며, 어떻게 그것들을 모으는지 안다.
//react-dom : 실제로 dom에 렌더링 하는 기능을 가지고, 컴포넌트를 가져와 dom에 삽입하는 라이브러리

import React, {Component} from 'react';//node_module에서 라이브러리 react를 가져옴
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAMrd8f0KOja4GBiehQI3AyXBfHybdZo7Y'

class App extends Component{
  constructor(props){
    super(props);
    this.state = { videos : [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos});
      //this.setState({videos:videos})//value, key 같을 때
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/> 
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));//App이 아니라 <App />으로
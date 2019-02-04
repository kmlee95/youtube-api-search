//렌더링 : 컴포넌트를 html에 올린다는 말
//react : 어떻게 렌더링 되며, 어떻게 그것들을 모으는지 안다.
//react-dom : 실제로 dom에 렌더링 하는 기능을 가지고, 컴포넌트를 가져와 dom에 삽입하는 라이브러리

import React, {Component} from 'react';//node_module에서 라이브러리 react를 가져옴
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash'; // lodash에서 debounce 메소드 함수 호출시기 조절


const API_KEY = 'AIzaSyAlq5xewgTsoRPkRfqO7gR4udw21Ptg_FQ'

class App extends Component{
  constructor(props){
    super(props);
    this.state = { 
      videos : [], 
      selectedVideo : null
    };

    this.videoSearch('세븐나이츠');
  }
  
  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos : videos,
        selectedVideo : videos[0]
      });
      //term에 term값 저장
      //this.setState({videos:videos})//value, key 같을 때
    });
  }

  render(){
    const videoSearch = _.debounce((term)=>{ this.videoSearch(term) },300); //300밀리초마다 호출
    //콜백을 사용했는데 리덕스로 더 짧게, 간단히 가능.
    //콜백으로 부모 자식컴포넌트 communication 가능.
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/> 
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));//App이 아니라 <App />으로
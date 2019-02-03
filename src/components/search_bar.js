import React, { Component } from 'react';
//const Component = React.Component; 같은 의미
//index.js에 있는 app과 같이 함수형 컴포넌트는 어떤 정보와 jsx로 분리될 때 사용
class SearchBar extends Component { //클래스형 컴포넌트는 상태변화가 자주 일어날 때 사용
  constructor(props){
    super(props);
    this.state = { term : 'Starting Value'};//오브젝트(setState로만 변경되게..) this.state.term = nono!
    //다른데에선 setState를 쓴다.
  }
  render(){
    return(
      <div>
        <input 
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})}
        />

      </div>
    );
  }


}//React.Component의 모든기능을 제공받자.



export default SearchBar;
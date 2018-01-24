import React from 'react';
import './com1.less';
import $ from "jquery";
export default class Com1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    $('.b').css('color', 'green');
    fetch('/list').then((res)=>{
      return res.json()
    }).then((json)=>{
      this.setState({data:json.data})
    })
  }

  render() {
    if(!this.state.data){
      return <div/>;
    }
    return (
      <div className="com1" style={{position: "absolute"}}>
        这是1
        <div className="b">bb</div>
        <div>{this.state.data.data[0].city}</div>
      </div>
    )
  }
}
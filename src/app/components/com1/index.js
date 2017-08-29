import React from 'react';
import './com1.less';
import $ from "jquery";
export default class Com1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log(this);
    $('.b').css('color', 'green')
  }

  render() {
    return (
      <div className="com1" style={{position: "absolute"}}>
        111231
        <div className="b">bb</div>
      </div>
    )
  }
}
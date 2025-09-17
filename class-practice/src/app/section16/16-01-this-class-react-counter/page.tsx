"use client";

import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  // 해결방법1) 화살표함수
  onClickCountUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>

        {/* 해결방법2) this 바인딩 */}
        <button onClick={this.onClickCountUp.bind(this)}>
          카운트 올리기!!
        </button>
      </>
    );
  }
}

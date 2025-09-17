"use client";

import Link from "next/link";
import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("그려지고 나서 실행!!");
  }

  componentDidUpdate() {
    console.log("변경되고 나서 실행!!");
  }

  componentWillUnmount() {
    console.log("사라지기 전에 실행!!");
    // 예) 채팅방 나가기, 불필요한 타이머 취소 등 청소하기
  }

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

        <Link href={"/"}>나가기!!</Link>
      </>
    );
  }
}

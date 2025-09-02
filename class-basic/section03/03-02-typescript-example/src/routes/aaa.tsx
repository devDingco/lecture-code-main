import { Link } from 'react-router'

const Aaa = () => {



    return (
        <>
            <div>Aaa페이지 입니다.</div>

            {/* 1. 리액트의 이동방식: JS로 만들어진 컴포넌트만 바꿔치기 */}
            <Link to="/bbb">bbb로 갈래요</Link>

            {/* 2. HTML 이동방식: html 새로접속(느림) => html, body, head 모두 다시 시작됨 */}
            <a href='/bbb'>bbb로 갈래요</a>
        </>
    )
}

export default Aaa
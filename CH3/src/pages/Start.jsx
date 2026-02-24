import { Link } from 'react-router-dom'

export default function Start() {
  return (
    <div className="page start-page">
      <h1>덕후 테스트</h1>
      <p>총 10문제입니다. 페이징으로 한 문제씩 이동해요.</p>
      <Link to="/q/1" className="btn">
        시작하기
      </Link>
    </div>
  )
}

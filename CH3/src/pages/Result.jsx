import { useLocation, Link } from 'react-router-dom'

const MAX_SCORE = 30 // 10문제 × 최대 3점 가정

function getGrade(score) {
  if (score <= 10) return { label: '입문', desc: '아직 덕후 길이 멀었어요.' }
  if (score <= 20) return { label: '일반인', desc: '조금만 더 보면 덕후!' }
  return { label: '진정한 덕후', desc: '당신은 이미 완전한 덕후입니다.' }
}

export default function Result() {
  const location = useLocation()
  const answers = location.state?.answers ?? []
  const score = answers.reduce((sum, n) => sum + n, 0)
  const { label, desc } = getGrade(score)

  return (
    <div className="page result-page">
      <h1>결과</h1>
      <p className="score">
        {score}점 / {MAX_SCORE}점
      </p>
      <p className="grade">{label}</p>
      <p className="grade-desc">{desc}</p>
      <Link to="/" className="btn">
        다시 하기
      </Link>
    </div>
  )
}

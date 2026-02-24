import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { questions } from '../data/questions'

const TOTAL = questions.length

export default function Question() {
  const { num } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const answers = location.state?.answers ?? []
  const index = Number(num)
  const question = questions[index - 1]

  if (!question) {
    navigate('/', { replace: true })
    return null
  }

  const handleChoice = (score) => {
    const nextAnswers = [...answers, score]
    if (index >= TOTAL) {
      navigate('/result', { state: { answers: nextAnswers } })
    } else {
      navigate(`/q/${index + 1}`, { state: { answers: nextAnswers } })
    }
  }

  return (
    <div className="page question-page">
      <div className="progress">
        {index} / {TOTAL}
      </div>
      <h2>{question.title}</h2>
      <p className="question-text">{question.text}</p>
      {question.imageSrc ? (
        <img src={question.imageSrc} alt="" className="question-img" />
      ) : (
        <div className="question-img-placeholder">이미지 영역 (직접 넣어주세요)</div>
      )}
      <ul className="choices">
        {question.choices.map((c) => (
          <li key={c.id}>
            <button type="button" className="choice-btn" onClick={() => handleChoice(c.score)}>
              {c.label}
            </button>
          </li>
        ))}
      </ul>
      <nav className="paging-nav">
        {index > 1 && (
          <button type="button" onClick={() => navigate(`/q/${index - 1}`, { state: { answers: answers.slice(0, -1) } })}>
            이전
          </button>
        )}
        <span className="paging-info">
          {index} / {TOTAL}
        </span>
        {index < TOTAL && (
          <button type="button" onClick={() => navigate(`/q/${index + 1}`, { state: { answers } })}>
            다음 (선택 안 함)
          </button>
        )}
      </nav>
    </div>
  )
}

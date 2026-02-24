import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import Question from './pages/Question'
import Result from './pages/Result'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/q/:num" element={<Question />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  )
}

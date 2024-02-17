import Quiz from '../img/quiz.png'
import '../components/HeaderHome.css'

import { useContext } from 'react'
import { QuizContext } from '../context/Quiz'

const HeaderHome = () => {
  const quizState = useContext(QuizContext);
  console.log(quizState)
  return (
    <div className="HeaderHome">
      <h3>Você conhece o básico sobre mim?</h3>
      <button>Começar</button>
      <img className='quiz-img' src={Quiz} alt='Imagem do Quiz'/>
    </div>
  )
}

export default HeaderHome
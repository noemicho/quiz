import Quiz from '../img/quiz.png'
import '../components/HeaderHome.css'

const HeaderHome = () => {
  return (
    <div className="HeaderHome">
      <h3>Você conhece o básico sobre mim?</h3>
      <button>Começar</button>
      <img className='quiz-img' src={Quiz} alt='Imagem do Quiz'/>
    </div>
  )
}

export default HeaderHome
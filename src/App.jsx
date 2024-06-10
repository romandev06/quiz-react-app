import { useState } from 'react'
import './App.css'

const answers = [
  {
    title: 'Что такое React?',
    variants: ['Библиотека', 'Плагин', 'Фреймворк'],
    correct: 0,
  },

  {
    title: 'Что такое Vue?',
    variants: ['Язык программирования', 'Фреймворк', 'Вирус'],
    correct: 1,
  },

  {
    title: 'Что такое JavaScript?',
    variants: ['Игра', 'Библиотека', 'Язык программирования'],
    correct: 2,
  }
]


function Result( { correct } ) {

  return (
    <section className='result-section'>
      <h4>Вы отгадали {correct} ответа из {answers.length}</h4>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </section>
  )
}



function Game( { step, question, upStep } ) {
  const progressLine = Math.round(step / answers.length * 100)

  return (
    <section className='game-section'>
      <div><span className='progress-line' style={{width: `${progressLine}%`}}></span></div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => <li onClick={() => upStep(index)} key={variant}>{variant}</li>)}
      </ul>
    </section>
  )
}


function App() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  let question = answers[step]

  function upStep(index) {
    setStep(step + 1)

    index === question.correct ? setCorrect(correct + 1) : ''
  }

  return (
    <>
      {step !== answers.length ? <Game step={step} question={question} upStep={upStep} /> : <Result s correct={correct} />}
    </>
  )
}

export default App



// следующий шаг при клике ширину прогресс бара увеличивать (добавить логику, которая будет всегда точной, не смотря на количество обьектов в answers)
// затем при клике нужно задавать setStep + 1, чтобы менять уже title и variants
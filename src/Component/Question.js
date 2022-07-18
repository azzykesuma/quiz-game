import React, { useState } from 'react'
import { questionData } from '../data/questionData'
import { answerData } from '../data/answer'

function Question() {
  const [count, setCount] = useState(0)
  const [lives, setlives] = useState(3)
  const [result, setresult] = useState('Klik salah satu jawaban')

  const addIndex = () => {
    setCount(count + 1)
    setresult('')
  }

  const valTest = (e) => {
    console.log(e.target.value)
    if(e.target.value === questionData[count].answer) {
      setresult('Benar!')
    } else {
      setresult('Salah!')
    }
  }


  return (
    <>
    <h5>You have {lives} lives</h5>
      <p className='questions'>
        {questionData[count] === undefined ? "mentok coy" :  questionData[count].question}
      </p>
      {answerData[count] === undefined? 'mentok coy' : answerData[count].map(item => {
        return (
          <div key={Math.floor(Math.random() * 100000)}>
           <ul>
            <li>{item}</li>
           </ul>
          </div>
        )
      })}
      <p>{result}</p>
      <br />
      <button onClick={addIndex}>Next</button>
      {/* <button onClick={valTest}>get Value</button> */}
    </>
  )
}

export default Question
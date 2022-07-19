import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { questionData } from '../data/questionData'
import { answerData } from '../data/answer'
import { Link } from 'react-router-dom';
import Endgame from './Endgame';

function Question() {
  const [count, setCount] = useState(0)
  const [lives, setlives] = useState(3)
  const [result, setresult] = useState('Klik salah satu jawaban')
  const navigate = useNavigate()
  console.log(questionData.length - 1)
  const [gameOver, setgameOver] = useState(false)
  const [isEndGame, setisEndGame] = useState(false)
  
  const addIndex = () => {
    setCount(count + 1)
    setresult('')
  }

  useEffect(() => {
    if(gameOver) {
      navigate('/')
    }
  })

  const valTest = (e) => {
    const target = e.target
    if(target.innerHTML === questionData[count].answer) {
      setresult('Benar!')
      addIndex()

      if(count === questionData.length - 1) {
        setisEndGame(true)
      }
    } else {
      setresult('Salah!')
      setlives(lives - 1)

      if(lives === 1) {
        setgameOver(true)
      }
    }
  }


  return (
    <>
    <div className="container">
      {isEndGame ? null : (
        <h5>{lives === 1 ? `you have ${lives} live` : `you have ${lives} lives`}</h5>
      )}
      { isEndGame ? <Endgame /> : (
        <div className="mainSection">
          <p className='questions'>
            {questionData[count] === undefined ? "mentok coy" :  questionData[count].question}
          </p>
          <ul className='answerContainer'>
            {answerData[count] === undefined? 'mentok coy' : answerData[count].map(item => {
              return (
                  <li onClick={valTest}
                  key={Math.floor(Math.random() * 100000)}
                  className='answerBox'>
                    {item}
                  </li>
              )
            })}
          </ul>
      </div>
      )}

        <p>{result}</p>
        <p>{lives === 0 ? 'Game Over!' : null}</p>
        <br />
        <div className="btnContainer">
          <Link to='/'>
          <button className='homeBtn'>home</button>
          </Link>
          {/* {isEndGame ? null : 
          <button className='nextBtn' onClick={addIndex} disabled={gameOver}>Next</button>
          } */}
        </div>
      </div>
    </>
  )
}

export default Question
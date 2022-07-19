import React from 'react'
import { Link } from 'react-router-dom'
import Question from './Component/Question'
function Questions() {
  return (
    <>
      <h2 className='questionsTag'>Questions </h2>
      <Question />
      <br />
    </>
  )
}

export default Questions
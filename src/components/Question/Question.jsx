import React from 'react'
import './index.css'

function Question({question}) {
  return (
    <div className='question-container'>
        {question}
    </div>
  )
}

export default Question
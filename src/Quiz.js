import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz_position: 0,
    }
  }
  render() {
    console.log(quizData.quiz_questions[this.state.quiz_position])
    return (
      <div>
        <div className="QuizQuestion">
          <p>{quizData.quiz_questions[this.state.quiz_position].instruction_text}</p>
        </div>
      </div>
    )
  }
}

export default Quiz;
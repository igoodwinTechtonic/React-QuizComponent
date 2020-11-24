import React, { Component } from 'react'

// let quizData = require('./quiz_data.json')

class QuizQuestion extends Component {
  render() {
    console.log(props);
    return (
      <main>
        <section>
          <p>{props.quiz_question.instructions_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <li>{props.quiz_question.answer_options[0]}</li>
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion;
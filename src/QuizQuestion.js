import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'
// let quizData = require('./quiz_data.json')

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectAnswer: false,
    }
  }
  handleClick(buttonText) {
     if (buttonText === this.props.quiz_question.answer) {
       this.props.showNextQuestionHandler();
       this.setState({ incorrectAnswer: false });
     } else {
       this.setState({ incorrectAnswer: true });
     }
  }
  render() {
    return (
      <main>
        {this.state.incorrectAnswer
        ? <p className="error">Sorry, that's not right</p>
        : null }
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map(answerOption => {
              let key = this.props.quiz_question.answer_options.indexOf(answerOption);
              let buttonText = answerOption;
              return (
                <QuizQuestionButton
                key={key}
                button_text={buttonText}
                clickHandler={this.handleClick.bind(this)}/>
              )
            })}
            {/* <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]} /> */}
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion;
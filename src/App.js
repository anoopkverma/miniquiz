import React, { Component } from 'react';
import './App.css';
import QuestionList from './components/QuestionList.js';
import Scorebox from './components/Scorebox.js';
import Results from './components/Results.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is capital of India?',
          choices: [
            {
              id: 'a',
              text: 'Banglore'
            },
            {
              id: 'b',
              text: 'Mumbai'
            },
            {
              id: 'c',
              text: 'New Delhi'
            },
            {
              id: 'd',
              text: 'Kolkata'
            }
          ],
          correct: 'c'
        },
        {
          id: 2,
          text: 'What is capital of Russia?',
          choices: [
            {
              id: 'a',
              text: 'Saint Petersburg'
            },
            {
              id: 'b',
              text: 'Moscow'
            },
            {
              id: 'c',
              text: 'Novosibirsk'
            },
            {
              id: 'd',
              text: 'Yekaterinburg'
            }
          ],
          correct: 'b'
        },
        {
          id: 3,
          text: 'What is capital of China?',
          choices: [
            {
              id: 'a',
              text: 'Shanghai'
            },
            {
              id: 'b',
              text: 'Chongqing'
            },
            {
              id: 'c',
              text: 'Hangzhou'
            },
            {
              id: 'd',
              text: 'Beijing'
            }
          ],
          correct: 'd'
        },
        {
          id: 4,
          text: 'What is capital of Japan?',
          choices: [
            {
              id: 'a',
              text: 'Tokyo'
            },
            {
              id: 'b',
              text: 'Osaka'
            },
            {
              id: 'c',
              text: 'Kyoto'
            },
            {
              id: 'd',
              text: 'Nagoya'
            }
          ],
          correct: 'a'
        }
      ],
      score: 0,
      current: 1
    };
  }

  setCurrent(current) {
    this.setState({current});
  }

  setScore(score) {
    this.setState({score});
  }

  render() {
    if (this.state.current > this.state.questions.length) {
      var scorebox = <Results {...this.state} />;
    } else {
      var scorebox = <Scorebox {...this.state} />;
    }
    return (
      <div>
        <div>
          <h1 className="App-header">React Quiz</h1>
          <p class="lead">A simple quiz application written in React.js</p>
        </div>
        <div>
          {scorebox}
          <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;

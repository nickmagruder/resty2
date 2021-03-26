import React from 'react';
import { If, isObjectEmpty } from './components/if/If.js';
import Results from './components/results/Results.js';
import Form from './components/form/Form.js';
import History from './components/history/History.js';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [],
      request: {},
    }
  }

   componentDidMount() {
     async function getHistory() {
      await { history: JSON.parse(localStorage.getItem('history')) };
     }
     this.setState(getHistory());
  } 

  handleRequest = (request) => {

    let updatedHistory = request.error ? [...this.state.history] : [...this.state.history, request];

    this.setState({
      request: request,
      history: updatedHistory,
    }, () => {
      localStorage.setItem('history', JSON.stringify(this.state.history));
    });
  }

  render() {
    return (
      <div className="App">
        <Form handleRequest={this.handleRequest} history={this.state.history} />
        <If condition={isObjectEmpty(this.state.request)}>
          <Results request={this.state.request} />
        </If>
        <History requests={this.state.history} />
      </div>
    );
  }
}

export default App;

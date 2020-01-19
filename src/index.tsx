// 1) Basic setup of a React App with TypeScript

// import React from 'react';
// import ReactDOM from 'react-dom';

// interface AppProps {
//   // ? makes the prop optional
//   color?: string;
// }

// class App extends React.Component<AppProps> {
//   render() {
//     return <div>{this.props.color}</div>;
//   }
// }

// ReactDOM.render(<App color="red" />, document.getElementById('root'));

// 2)

// import React from 'react';
// import ReactDOM from 'react-dom';

// interface AppProps {
//   // ? makes the prop optional
//   color?: string;
// }

// interface AppState {
//   counter: number;
// }

// class App extends React.Component<AppProps, AppState> {
//   //   state = { counter: 0 };
//   constructor(props: AppProps) {
//     super(props);

//     this.state = { counter: 0 };
//   }

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//         {this.state.counter}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App color="red" />, document.getElementById('root'));

// 3)

// import React from 'react';
// import ReactDOM from 'react-dom';

// interface AppProps {
//   // ? makes the prop optional
//   color?: string;
// }

// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };

// ReactDOM.render(<App color="red" />, document.getElementById('root'));

// __________________________
// Setting up Redux

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { App } from './components/App';
import { reducers } from './reducers/index';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

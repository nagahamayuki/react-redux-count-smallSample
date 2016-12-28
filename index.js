import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

/* action */
const Adding = {
  type: 'ADDING',
  count: 1
}

/* reducer */
const Reducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'ADDING':
      return {
        count: state.count + action.count
      }
    default:
      return state;
  }
}

/* store */
const store = createStore(Reducer);

class CountComponent extends React.Component{
  render(){
    const { count, handleClick } = this.props;
    return(
      <div>
        <span>{this.props.count}</span>
        <button onClick={this.props.handleClick}>追加</button>
      </div>
    );
  }
}

/* 接続 */
const mapStateToProps = (state) => {
  return{
    count: state.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    handleClick:() => {
      dispatch(Adding)
    }
  }
}

let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountComponent)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app"))

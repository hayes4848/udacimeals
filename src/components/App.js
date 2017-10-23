import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps({ calendar, food }){
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar: dayOrder.map((day) => ({
      day, 
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? food[calendar[day][meal]]
          : null

        return meals  
      }, {})
    }))
  }
}

function mapDispatchToProps (dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)), 
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

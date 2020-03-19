import React from 'react';
import logo from './logo.svg';
import './App.css';
import Exercises from './components/Exercises'
import { Header, Footer } from './components/Layouts/index.js';
import { muscles, exercises} from './Store'

class App extends React.Component{
  state = {
    exercises
  }

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]

        return exercises
      }, {})
    )
  }


render(){
  const exercises = this.getExercisesByMuscles()
  return (
    <div className="App">
      <Header/>

    <Exercises
      exercises = {exercises}
      />

      <Footer
        muscles={muscles}
          />
    </div>
  );

}
}

export default App;

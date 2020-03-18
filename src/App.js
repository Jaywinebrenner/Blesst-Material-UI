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

  getExcercisesByMuscles() {
    return this.state.exercises
  }


render(){
  console.log(this.getExcercisesByMuscles())
  return (
    <div className="App">
      <Header/>

    <Exercises

      />

      <Footer
        muscles={muscles}
          />
    </div>
  );

}
}

export default App;

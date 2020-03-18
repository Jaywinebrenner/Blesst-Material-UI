import React from 'react';
import logo from './logo.svg';
import './App.css';
import Exercises from './components/Exercises'
import { Header, Footer } from './components/index.js'

class App extends React.Component{
render(){
  return (
    <div className="App">
      <Header/>

    <Exercises/>

      <Footer/>
    </div>
  );

}
}

export default App;

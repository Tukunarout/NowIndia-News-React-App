import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

export default class App extends Component {
pageSize = 3;
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<><NavBar/><News key={"general"} pageSize={this.pageSize} category="general"/></>}/>          
          <Route exact path='/business' element={<><NavBar/><News key={"business"} pageSize={this.pageSize} category="business"/></>}/>          
          <Route exact path='/entertainment' element={<><NavBar/><News key={"entertainment"} pageSize={this.pageSize} category="entertainment"/></>}/>          
          <Route exact path='/general' element={<><NavBar/><News key={"general"} pageSize={this.pageSize} category="general"/></>}/>          
          <Route exact path='/health' element={<><NavBar/><News key={"health"} pageSize={this.pageSize} category="health"/></>}/>          
          <Route exact path='/science' element={<><NavBar/><News key={"science"} pageSize={this.pageSize} category="science"/></>}/>          
          <Route exact path='/sports' element={<><NavBar/><News key={"sports"} pageSize={this.pageSize} category="sports"/></>}/>          
          <Route exact path='/technology' element={<><NavBar/><News key={"technology"} pageSize={this.pageSize} category="technology"/></>}/>          
        </Routes>
        </BrowserRouter>
        
      </div>
    )
  }
}
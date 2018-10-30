import React, { Component } from 'react';
import './App.css';
import {Route,NavLink,Switch } from 'react-router-dom';
import MoviesPage from './components/MoviesPage';
import NewMoviesPage from './components/NewMoviesPage';
import 'semantic-ui-css/semantic.min.css';

import {Footer} from './components/Footer';
import {Header} from './components/Header';

import {
  Container,
  Image,
  Menu,
  Visibility,
} from 'semantic-ui-react'



const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
}

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px',
}




class App extends Component {

  state = {
    menuFixed: null,
    overlayFixed: false,
  }

  

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: null })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {

    return (
      
      <div className="App">

      <Header/>
   
      <Container text>
      
       <Route  path='/Movies'  component={MoviesPage} exact />
       <Route  path='/Movies/new' component={NewMoviesPage}  exact/>
       <Route  path='/movie/:_id' component={NewMoviesPage}  exact/>

      </Container>

      
       <Footer></Footer>
      
      </div>
    
    );
  }
}

export default App;

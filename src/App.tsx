import React from 'react'
//import style from './App.css'
import './styles/index.scss'
import Search from './components/Search'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import WordDefinitions from './components/WordDefinitions'
import BottomMenu from './components/BottomMenu'


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app-content p-10">
          <Switch>
            <Route path="/word/:word">
              <WordDefinitions></WordDefinitions>
            </Route>
            <Route path="/">
              <Search></Search>
            </Route>
          </Switch>
        </div>
        <div className="app-menu">
          <BottomMenu></BottomMenu>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

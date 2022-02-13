import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <BrowserRouter>
      <div className={`container ${theme}`}>
        <Navbar/>
        <div className='main'>
          <Switch>
            <Route path="/post/:postId">
              <PostPage/>
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
         
        </div>
        <div className='footer'>
          Awesome blog, All Rights Reserved
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

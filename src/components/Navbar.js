import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

export default function Navbar() {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className="header">
        <div className="header-item">
            <a href='/'><strong>Awesome Blog</strong></a>
        </div>
        <div className="header-item">
            <a href="/login">Login</a>
            <button onClick={toggleTheme}>{theme === 'light'?'Theme:dark': 'Theme:light'}</button>
        </div>
    </div>
  )
}

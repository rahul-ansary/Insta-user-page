import { useState } from 'react'

import './App.css'
import Signup from './Signup/Signup'
import Login from './Login/Login'
// import Login from './Login/Login'

function App() {
  const [showLoginPage, setShowLoginPage] = useState(false);

  const handleTogglePage = () => {
    setShowLoginPage(!showLoginPage);
  }

  return (
    <div>
      {
        showLoginPage ?  <Signup onTogglePage={handleTogglePage}/> : <Login onTogglePage={handleTogglePage}/>
      }

    </div>
  )
}

export default App;

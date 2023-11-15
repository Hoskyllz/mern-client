import axios from 'axios';

// import Routes from "./Routes";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RegisterAndLoginForm } from './RegisterAndLoginForm';
import Chat from './Chat';




function App() {
  axios.defaults.baseURL = 'http://localhost:3000'
  axios.defaults.withCredentials = true


  return (
   
    <Router>
      <Routes>
        <Route path='/' element={<Chat/>} />
        <Route path='/register' element= {<RegisterAndLoginForm />} />
        
      </Routes>
      
      </Router>
   
   
  )
}

export default App


//node index.js
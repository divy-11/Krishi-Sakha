import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signup } from "./Pages/Signup"
import { Signin } from "./Pages/Signin"
import { Newdash } from "./Pages/Newdash"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/new' element={<Newdash />} />
          {/* <Route path='/history' element={<History />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

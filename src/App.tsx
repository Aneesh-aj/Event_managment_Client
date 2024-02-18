
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserRoutes from './Routes/UserRoutes'
import OrganizerRoutes from './Routes/OrganizerRoutes'
import AdminRoutes from './Routes/AdminRoutes'
import Home from './Pages/Home'
import Nav from './Components/Nav'
function App() {

  return (
    <>
    <Nav/>
      <BrowserRouter>
        {/* <OrganizerRegistration></OrganizerRegistration> */}
        <Routes>
          <Route path='/' element={<Home/>} />
           <Route path='/user/*' element={<UserRoutes/>} />
           <Route path='/organizer/*' element={<OrganizerRoutes/>} />
           <Route path='/admin/*' element={<AdminRoutes/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

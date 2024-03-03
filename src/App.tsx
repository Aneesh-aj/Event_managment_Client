
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserRoute from './Routes/UserRoutes'
import OrganizerRoutes from './Routes/OrganizerRoutes'
import AdminRoutes from './Routes/AdminRoutes'
import Home from './Pages/Home'
import Nav from './Components/Nav'
import CommonRoutes from './Routes/common'
function App() {

  return (
    <>
    <Nav/>
      <BrowserRouter>
        {/* <OrganizerRegistration></OrganizerRegistration> */}
        <Routes>
           <Route path='/' element={<Home/>} />
          <Route path='/*' element={<CommonRoutes/>} />
           <Route path='/user/*' element={<UserRoute/>} />
           <Route path='/organizer/*' element={<OrganizerRoutes/>} />
           <Route path='/admin/*' element={<AdminRoutes/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import CreateUsers from './components/Users/CreateUsers'
import NotFound from './components/NotFound/NotFound'
import { Route, Routes } from 'react-router-dom'
import UserDetails from './components/Users/UserDetails'
const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-users' element={<CreateUsers />} />
          <Route path='/users/:id' element={<UserDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer/Footer';
import TopNavBar from './Components/NavBar/TopNavBar';
import SearchOverlay from './Components/SearchOverlay';
import Profile from './Components/Profile'
import Skills from './Components/skills/interests/Skills'
import Home from './Components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login/Login'
import Signup from './Components/Login/Signup';
import Messaging from './Components/Messanger/Messaging'



const App = (props) => {
  const [isSearchOn, setIsSearchOn] = useState(false) //not being used atm  this is to set the overlay when the search is going on
  const [userData, setUserData] = useState('')
  const [showTopNavBar, setShowTopNavBar] = useState(true)


  return (

    <>


      <div className="container-fluid p-0 m-0">
        <Router>
          {showTopNavBar && <TopNavBar
            // userData={userData}
            //  setShowTopNavBar={setShowTopNavBar} 
            setIsSearchOn={setIsSearchOn}

          ></TopNavBar>}
          <Route path="/" exact render={(routerProps) => <Login
            setUserData={setUserData} 
            setShowTopNavBar={setShowTopNavBar}
            {...routerProps}

          ></Login>}></Route>
          <Route path="/signup" exact render={(routerProps) => <Signup setUserData={setUserData}   {...routerProps}></Signup>}></Route>
          <Route path="/home" exact render={(routerProps) => <Home userData={userData}  {...routerProps}></Home>}></Route>
          <Route path="/profile" exact render={(routerProps) => <Profile userData={userData}  {...routerProps}></Profile>}></Route>
        </Router>

        <Messaging />
        <Footer></Footer>

      </div>

    </>

  );
}

export default App


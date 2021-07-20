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




const App = () => {
  const [loggedUser, setLoggedUser] = useState(false)
  const [isSearchOn, setIsSearchOn] = useState(false)

  useEffect(() => {
    getLoggedUser()
  }, [])

  const getLoggedUser = async () => {
    try {

      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/60f5264b0efe7800155c3494", {
        method: "Get",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjYyNzAyMjMsImV4cCI6MTYyNzQ3OTgyM30.0IcvG8-Zqf633mRWGCRlzG5yDVI6njZjZGZzJfuGulw",
        },
      }
      )
      let dataRequested = await response.json()
      setLoggedUser(dataRequested)
    } catch (e) {
      return e
    }
  }

  return (

    <>


 


      {loggedUser && 
        <div className="container-fluid p-0 m-0">
        <TopNavBar userInfo={loggedUser} setIsSearchOn={setIsSearchOn}></TopNavBar>
        {isSearchOn && <SearchOverlay></SearchOverlay>}
         
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
          </Router>

          <Footer></Footer>


        </div>}
    </>

  );
}

export default App


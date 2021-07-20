import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer/Footer';
import TopNavBar from './Components/NavBar/TopNavBar';
import SearchOverlay from './Components/SearchOverlay';
import Profile from './Components/Profile';
import Home from './Components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login/Login'



const App = (props) => {
  const [loggedUser, setLoggedUser] = useState(false)
  const [isSearchOn, setIsSearchOn] = useState(false) //not being used atm  this is to set the overlay when the search is going on
  const [userData, setUserData] = useState('')

  // useEffect(() => {
  //   getLoggedUser()
  // }, [])

  // const getLoggedUser = async () => {
  //   try {

  //     let response = await fetch(
  //       "https://striveschool-api.herokuapp.com/api/profile/60f5264b0efe7800155c3494", {
  //         method: "Get",
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjYyNzAyMjMsImV4cCI6MTYyNzQ3OTgyM30.0IcvG8-Zqf633mRWGCRlzG5yDVI6njZjZGZzJfuGulw",
  //         },
  //       }
  //     )
  //     let dataRequested = await response.json()
  //     setLoggedUser(dataRequested)
  //   } catch (e) {
  //     return e
  //   }
  // }

  return (

    <>

      <div className="container-fluid p-0 m-0">
        {window.location.pathname !== '/' && <TopNavBar userInfo={userData} setIsSearchOn={setIsSearchOn}></TopNavBar>}
        <Router>
          <Route path="/" exact render={(routerProps) => <Login setUserData={setUserData} setLoggedUser={setLoggedUser}  {...routerProps}></Login>}></Route>
          <Route path="/home" exact render={(routerProps) => <Home userData={userData}  {...routerProps}></Home>}></Route>
          <Route path="/profile" exact render={(routerProps) => <Profile userData={userData}  {...routerProps}></Profile>}></Route>
        </Router>

        <Container>
          <Footer></Footer>
        </Container>
      </div>
    </>

  );
}

export default App


import React from 'react'

function InitialPage() {
    return (
        <div className="container-fluid p-0 m-0">
        <TopNavBar userInfo={loggedUser} setIsSearchOn={setIsSearchOn}></TopNavBar>
        {isSearchOn && <SearchOverlay></SearchOverlay>}
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
          </Router>
        <Container>
        <Footer></Footer>
        </Container>
        {console.log(loggedUser)}
      </div>
    )
}

export default InitialPage

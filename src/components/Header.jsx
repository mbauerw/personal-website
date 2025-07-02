import NavBar from './NavBar'

function Header() {
  const logo = require('../images/logo2.png');

    return (
      <div className="header-wrap">
        <div className="logo-wrap">
          {/* <h1 className="logo-name">Max Bauer</h1> */}
          <img src={logo} id="logo-image" alt="logo" width="280px" height ="100%"/>
        </div>        
        <div className="nav-wrap-inner">
          <NavBar></NavBar>
        </div>
      </div>
    ) 
}

export default Header;
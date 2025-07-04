import NavBar from "./NavBar";


function Header() {

  return (
    <div class="w-full shadow-lg h-18 bg-neutral-600 flex fixed border-b-2">
      <div class="w-1/3 h-full">
        <img src="src/images/logo2.png" class="w-70 h-full p-2" id="logo-image" />
      </div>        
      <div id="nav-wrap-inner">
        <NavBar></NavBar>
      </div>
    </div>
  )
}

export default Header;
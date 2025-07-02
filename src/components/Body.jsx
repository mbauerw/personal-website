import Blank from "./Blank";
import First from "./First";
import Header from "./Header";
import Sections from "./Sections";

function Body() {
   
  return (
    <body>
      <header>
        <Header></Header>
      </header>
      <div id="content-box">
        <First id="veryfirst"></First>
        <Blank></Blank>
        <First></First>
        <footer>
            <p>&copy; 2025 Your Company. All rights reserved.</p>
        </footer>
      </div>
            
            
    </body>
  )
}

export default Body;
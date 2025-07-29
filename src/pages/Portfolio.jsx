import GridBox from "../components/GridBox";
import { Link } from "react-router-dom"

function Portfolio() {

  const thumbs = [
    "bg-[url('src/images/thumbs/ratio_heatmap.png')]",
    "bg-[url('src/images/thumbs/play_up_logo.png')]",
    "bg-[url('src/images/thumbs/elff.png')]",
    "bg-[url('src/images/thumbs/Bauer-Photo-scaled.webp')]",
    "bg-[url('src/assets/GitHub_Logo.png')]",
    "bg-[url('src/images/bauerj.png')]"
  ]

  const portLink = (<a href="#" class="bg-white bg-opacity-90 text-slate-700 px-5 py-2.5 rounded-full font-medium no-underline hover:bg-white transition-colors duration-300">View Project</a>)
  const gdpPop = (<iframe 
      src="src/assets/gdp-pop.html"
      width="100%" 
      height="900"
      title="Example"
     
    />
  );

  const gdplink = (<Link to="/gdp" className="bg-white bg-opacity-90 text-slate-700 px-5 py-2.5 rounded-full font-medium no-underline hover:bg-white transition-colors duration-300">View Project</Link>);

  return (
    <div className="bg-gray-800/80 w-full h-[140vh]">
      <section class="max-w-6xl mx-auto mt-26">
        <div class="text-center mb-12">
          <h2 class="text-5xl p3 md:text-5xl text-stone-300 mb-2 font-bold">My Portfolio</h2>
          <p class="text-lg p3  text-stone-300">Explore my latest projects and creative work</p>
        </div>

        <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] md:grid-rows-[repeat(auto-fit,minmax(350px,1fr))] gap-6 md:gap-10 py-3">
         
          <GridBox thumb={thumbs[0]} title={"The Impact of Economic Growth on Population Change"} category={"Data Analysis"} description={"Data Analysis project exploring the relationships between economic growth and population change across the United States"} className={"bg-cover"} children={gdplink}></GridBox>
 
          <GridBox thumb={thumbs[1]} title={"Play Up"} category={"Web app and API Integration"} description={"Web App leveraging Spotify's API to provide more compelling playlists"} children={portLink}></GridBox>

          <GridBox thumb={thumbs[2]} title={"East Lansing Film Festival"} category={"Web Development"} description={"Website for the non-profit film patron The East Lansing Film Festival"} children={portLink}></GridBox>

          <GridBox thumb={thumbs[5]} title={"Website for My Dad"} category={"Community Service (jk)"} description={"Who wouldn't want to help build a website for their Dad?"} children={portLink}></GridBox>

          <GridBox thumb={thumbs[4]} title={"Github Repositories"} category={"Miscellaneous"} description={"Link to a variety of finished and unfinished projects hosted on my Github"} children={portLink}></GridBox>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;

{/* <iframe src="src/assets/gdp-pop.html" width="100%" height="1100px"></iframe> */ }
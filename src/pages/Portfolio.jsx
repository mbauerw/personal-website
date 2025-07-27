import GridBox from "../components/GridBox";

function Portfolio() {

  const thumbs = [
    "bg-[url('src/images/thumbs/ratio_heatmap.png')]",
    "bg-[url('src/images/thumbs/play_up_logo.png')]",
    "bg-[url('src/images/thumbs/elff.png')]",
    "bg-[url('src/images/thumbs/Bauer-Photo-scaled.webp')]",
    "bg-[url('src/assets/GitHub_Logo.png')]"
  ]

  return (
    <div className="bg-stone-300 w-full h-[140vh]">
      <section class="max-w-6xl mx-auto mt-26">
        <div class="text-center mb-12">
          <h2 class="text-5xl p3 md:text-5xl text-slate-700 mb-2 font-bold">My Portfolio</h2>
          <p class="text-lg p3  text-gray-600">Explore my latest projects and creative work</p>
        </div>

        <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] md:grid-rows-[repeat(auto-fit,minmax(350px,1fr))] gap-6 md:gap-10 py-3">
         
          <GridBox thumb={thumbs[0]} title={"The Impact of Economic Growth on Population Change"} category={"Data Analysis"} description={"Data Analysis project exploring the relationships between economic growth and population change across the United States"} className={"bg-cover"}></GridBox>
 
          <GridBox thumb={thumbs[1]} title={"Play Up"} category={"Web app and API Integration"} description={"Web App leveraging Spotify's API to provide more compelling playlists"}></GridBox>

          <GridBox thumb={thumbs[2]} title={"East Lansing Film Festival"} category={"Web Development"} description={"Website for the non-profit film patron The East Lansing Film Festival"}></GridBox>

          <GridBox thumb={thumbs[3]} title={"Website for My Dad"} category={"Community Service (jk)"} description={"Who wouldn't want to help build a website for their Dad?"}></GridBox>

          <GridBox thumb={thumbs[4]} title={"Github Repositories"} category={"Miscellaneous"} description={"Link to a variety of finished and unfinished projects hosted on my Github"} ></GridBox>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;

{/* <iframe src="src/assets/gdp-pop.html" width="100%" height="1100px"></iframe> */ }
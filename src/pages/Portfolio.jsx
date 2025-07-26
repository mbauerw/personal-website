

function Portfolio() {

    const thumbs = [
      "bg-[url('src/images/thumbs/ratio_heatmap.png')]",
      "bg-[url('src/images/thumbs/play_up_logo.png')]",
      "bg-[url('src/images/thumbs/elff.png')]",
      "bg-[url('src/images/thumbs/Bauer-Photo-scaled.webp')]"
    ]

    return (
    <div className="bg-stone-300 w-full h-[140vh]"> 
      <section class="max-w-6xl mx-auto mt-26">
        <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl text-slate-700 mb-2 font-bold">My Portfolio</h2>
            <p class="text-lg text-gray-500">Explore my latest projects and creative work</p>
        </div>

        <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] md:grid-rows-[repeat(auto-fit,minmax(350px,1fr))] gap-6 md:gap-10 py-3">
            <div class="relative aspect-square bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                <div class={`w-full h-[70%] bg-cover bg-center bg-no-repeat relative ${thumbs[0]}`}>
                    <div class="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="h-1/2 flex flex-col justify-end items-center pb-5">
                          <a href="#" class="bg-white bg-opacity-90 text-slate-700 px-5 py-2.5 rounded-full font-medium no-underline hover:bg-white transition-colors duration-300">View Project</a>
                        </div>
                        <div className="h-1/2 flex flex-col justify-start items-center pt-2">
                        <p className="opacity-100 text-white px-8 text-align-center"> Data Analysis project exploring the relationships between economic growth and population change across the United States </p>
                        </div>
                    </div>
                </div>
                <div class="p-5 h-[30%] flex flex-col justify-center">
                    <h3 class="text-xl font-semibold text-slate-700 mb-1">The Impact of Economic Growth on Population Change</h3>
                    <p class="text-sm text-gray-500 uppercase tracking-wider">Data Analysis</p>
                </div>
            </div>

            <div class="relative aspect-square bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                <div class={`w-full h-[70%] bg-contain bg-no-repeat bg-center relative ${thumbs[1]}`}>
                <div class="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="h-1/2 flex flex-col justify-end items-center pb-5">
                          <a href="#" class="bg-white bg-opacity-90 text-slate-700 px-5 py-2.5 rounded-full font-medium no-underline hover:bg-white transition-colors duration-300">View Project</a>
                        </div>
                        <div className="h-1/2 flex flex-col justify-start items-center pt-2">
                          <p className="opacity-100 text-white px-8 text-align-center"> Web App leveraging Spotify's API to provide more compelling playlists </p>
                        </div>
                    </div>
                </div>
                <div class="p-5 h-[30%] flex flex-col justify-center">
                    <h3 class="text-xl font-semibold text-slate-700 mb-1">Play Up </h3>
                    <p class="text-sm text-gray-500 uppercase tracking-wider">Web app and API Integration</p>
                </div>
            </div>

            <div class="relative aspect-square bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
            <div class={`w-full h-[70%] bg-contain bg-center bg-no-repeat relative ${thumbs[2]}`}>
              <div class="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-1/2 flex flex-col justify-end items-center pb-5">
                      <a href="#" class="bg-white bg-opacity-90 text-slate-700 px-5 py-2.5 rounded-full font-medium no-underline hover:bg-white transition-colors duration-300">View Project</a>
                    </div>
                    <div className="h-1/2 flex flex-col justify-start items-center pt-2">
                      <p className="opacity-100 text-white px-8 text-align-center"> Website for the local art supporter The East Lansing Film Festival  </p>
                    </div>
                  </div>
                </div>
                <div class="p-5 h-[30%] flex flex-col justify-center">
                    <h3 class="text-xl font-semibold text-slate-700 mb-1">East Lansing Film Festival</h3>
                    <p class="text-sm text-gray-500 uppercase tracking-wider">Web Development</p>
                </div>
            </div>

            <div class="relative aspect-square bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
            <div class={`w-full h-[70%] bg-contain bg-center bg-no-repeat relative ${thumbs[3]}`}>
              <div class="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-1/2 flex flex-col justify-end items-center pb-5">
                  <a href="#" class="bg-white bg-opacity-90 text-slate-700 px-5 py-2.5 rounded-full font-medium no-underline hover:bg-white transition-colors duration-300">View Project</a>
                </div>
                <div className="h-1/2 flex flex-col justify-start items-center pt-2">
                  <p className="opacity-100 text-white px-8 text-align-center"> Who wouldn't want to help build a website for their Dad? </p>
                </div>
              </div>
              </div>
              <div class="p-5 h-[30%] flex flex-col justify-center">
                  <h3 class="text-xl font-semibold text-slate-700 mb-1">Website for My Dad</h3>
                  <p class="text-sm text-gray-500 uppercase tracking-wider">Community service (jk)</p>
              </div>
            </div>
        </div>
    </section>
    </div>    
    );
  }
  
  export default Portfolio;

  {/* <iframe src="src/assets/gdp-pop.html" width="100%" height="1100px"></iframe> */}



const GridBox = ({thumb, title, description, category, className} ) => {

  return (
  <div class="relative aspect-square bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
    <div class={`w-full h-[70%] bg-contain bg-center bg-no-repeat relative ${thumb} ${className}`}>
        <div class="absolute inset-0 bg-zinc-700 bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="h-1/2 flex flex-col justify-end items-center pb-5">
              <a href="#" class="bg-white bg-opacity-90 text-slate-700 px-5 py-2.5 rounded-full font-medium no-underline hover:bg-white transition-colors duration-300">View Project</a>
            </div>
            <div className="h-1/2 flex flex-col justify-start items-center pt-2">
            <p className="opacity-100 text-white px-8 text-align-center"> {description} </p>
            </div>
        </div>
    </div>
    <div class="p-5 h-[30%] flex flex-col justify-center">
        <h3 class="text-xl font-semibold text-slate-700 mb-1">{title}</h3>
        <p class="text-sm text-gray-500 uppercase tracking-wider">{category}  </p>
    </div>
</div>
 )
}

export default GridBox;

import Photo from "./PropPractice";

function First({activeState, onChildClick}) {
	return(
		<div className = "first-section">
			<h1 className="font-serif italic text-4x1">This is the first section</h1>
			<h1> Herro {activeState}</h1>
			{/* <Photo
				onClick={onChildClick}
			></Photo> */}
			<h1>a asdfasdf </h1>
			<h1>This is the first section</h1>
			<h1>This is the first section</h1>
		</div>

	)
}


export default First;
export default function Categories() {
	return (
		<div className="h-full bg-myGreen">
			<div className="h-9/20 p-5">
				<div className="flex flex-col w-full h-full bg-white rounded-3xl p-4">
					<input
						type="text"
						placeholder="Select Date Range"
						className="w-full h-[40px] rounded-3xl px-4 mt-auto border border-myDarkGray"
					/>
				</div>
			</div>
			<div className="flex flex-col gap-4 h-11/20 bg-white p-8 rounded-t-4xl">
				<div className="text-myDarkGray">Categories</div>
				<button className="long-green-btn">Add Category</button>
			</div>
		</div>
	);
}

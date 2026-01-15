/**
 * Summary:
 *   A page that displays a single category's details and allows for editing/deleting of the category
 */
export default function Category() {
	return (
		<div className="h-full bg-myGreen">
			<div className="flex flex-col h-3/20 px-6 py-4">
				<div className="mt-auto">
					<p className="text-white text-sm">Category Name</p>
					<h1 className="text-white text-4xl font-bold">$100.00</h1>
				</div>
			</div>
			<div className="flex flex-col items-center gap-4 h-17/20 bg-white p-8 rounded-t-4xl">
				<p className="text-myDarkGray text-sm">Displaying X of Y</p>
				<button className="long-green-btn">Load More</button>
			</div>
		</div>
	);
}

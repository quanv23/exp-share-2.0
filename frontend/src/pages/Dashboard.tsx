export default function Dashboard() {
	return (
		<div className="h-full bg-myGreen">
			<div className="centered-flex flex-col gap-4 h-1/4 text-white">
				<p className="text-sm">Total Spending</p>
				<h1 className="text-4xl font-bold">$100.00</h1>
			</div>
			<div className="flex flex-col gap-4 h-3/4 bg-white px-7 py-8 rounded-t-4xl">
				<div className="flex flex-col w-full aspect-square bg-white border border-myDarkGray rounded-3xl p-4">
					<div className="flex mt-auto">
						<button className="w-1/3 h-[40px] border border-myDarkGray rounded-l-3xl hover:bg-myHoverWhite active:bg-myActiveWhite">
							Day
						</button>
						<button className="w-1/3 h-[40px] border border-myDarkGray hover:bg-myHoverWhite active:bg-myActiveWhite">
							Week
						</button>
						<button className="w-1/3 h-[40px] border border-myDarkGray rounded-r-3xl hover:bg-myHoverWhite active:bg-myActiveWhite">
							Month
						</button>
					</div>
				</div>
				<p className="text-myDarkGray">Transactions</p>
				<div className="flex flex-col items-center gap-4">
					<p className="text-myDarkGray text-sm">Displaying X of Y</p>
					<button className="long-green-btn">Load More</button>
				</div>
			</div>
		</div>
	);
}

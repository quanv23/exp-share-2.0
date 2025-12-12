import { HiOutlinePlusCircle } from 'react-icons/hi2';

export default function Home() {
	return (
		<div className="h-full bg-myGreen overflow-hidden">
			<div className="centered-flex flex-col h-3/5 bg-myGreen text-white">
				<HiOutlinePlusCircle size={175} />
				<h1 className="font-bold text-4xl">Exp-Share</h1>
			</div>
			<div className="h-2/5 bg-white p-8 rounded-t-4xl">
				<form className="flex flex-col gap-6">
					<h1 className="font-bold text-myGray">Add Expense</h1>
					<input className="input-field" type="text" placeholder="Title" />
					<div className="flex gap-4">
						<input
							className="input-field w-1/2"
							type="number"
							placeholder="Amount"
						/>
						<select className="input-field w-1/2" name="categories">
							<option className="text-gray" value="" disabled selected>
								Category
							</option>
						</select>
					</div>
				</form>
			</div>
		</div>
	);
}

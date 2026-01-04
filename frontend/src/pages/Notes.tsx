import { DayPicker } from 'react-day-picker';
import { useState } from 'react';

export default function Notes() {
	const [selectedDate, setSelectedDate] = useState<Date>();
	const [open, setOpen] = useState<Boolean>(false);

	return (
		<div className="bg-myGreen mb-16">
			<div className="flex flex-col h-28 px-6 py-4">
				<h1 className="mt-auto text-white font-bold text-4xl">Notes</h1>
			</div>
			<div className="bg-white p-8 rounded-t-4xl">
				<div className="relative">
					<button
						className="border active:bg-black"
						onClick={() => setOpen(!open)}
					>
						{!selectedDate ? 'Select Date' : selectedDate.toLocaleDateString()}
					</button>
					{open && (
						<div className="absolute top-full left-0 bg-white shadow-lg p-4">
							<DayPicker
								mode="single"
								selected={selectedDate}
								onSelect={setSelectedDate}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

/**
 * <Summary> A react component that's used to display successful actions
 */

import { HiOutlineCheckCircle } from 'react-icons/hi2';

export default function SuccessDialog() {
	return (
		<div className="centered-flex flex-col rounded-xl shadow-md gap-4 bg-white p-6 border-2 border-myGreen w-50">
			<HiOutlineCheckCircle size={50} color="#33ba77" />
			<p>Action Successful</p>
		</div>
	);
}

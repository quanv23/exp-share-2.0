import { HiOutlinePlusCircle } from 'react-icons/hi2';
import { useState } from 'react';
import ModalHelper from '../components/ModalHelper';
import SuccessDialog from '../components/SuccesDialog';
import FailureDialog from '../components/ErrorDialog';
import SelectCategory from '../components/SelectCategory';
import type { Expense } from '../utils/types';

export default function Home() {
	// State variable to hold new expense data
	const [expense, setExpense] = useState<Expense>({
		amount: '',
		category_id: '',
		title: '',
	});

	// State variables to control the display of success and error modals
	const [showError, setShowError] = useState<boolean>(false);
	const [showSuccess, setShowSuccess] = useState<boolean>(false);

	/**
	 * Toggles the success modal to be displayed
	 */
	function toggleSuccessModal(): void {
		setShowSuccess(!showSuccess);
	}

	/**
	 * Toggles the error modal to be displayed
	 */
	function toggleErrorModal(): void {
		setShowError(!showError);
	}

	/**
	 * Handles when an input in the form is changed and updates the state with the corresponding name of the input element
	 */
	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
		setExpense({
			...expense,
			[event.target.name]: event.target.value,
		});
	}

	/**
	 * Handles when a new category is selected
	 */
	function handleSelectChange(
		event: React.ChangeEvent<HTMLSelectElement>
	): void {
		setExpense({
			...expense,
			category_id: event.target.value,
		});
	}

	/**
	 * Handles when a form is submitted and adds an expense to the database
	 */
	async function handleFormSubmit(
		event: React.FormEvent<HTMLFormElement>
	): Promise<void> {
		try {
			event.preventDefault();

			// Validate that all fields are filled out
			for (const key in expense) {
				if (expense[key as keyof Expense] === '') {
					throw new Error('All fields must be filled out');
				}
			}

			const data = JSON.stringify({ expense });

			toggleSuccessModal();
		} catch (error) {
			console.error('Error submitting form:', error);
			toggleErrorModal();
		}
	}

	return (
		<>
			{showSuccess && (
				<ModalHelper isOpen={showSuccess} onClose={toggleSuccessModal}>
					<SuccessDialog />
				</ModalHelper>
			)}
			{showError && (
				<ModalHelper isOpen={showError} onClose={toggleErrorModal}>
					<FailureDialog />
				</ModalHelper>
			)}
			<div className="h-full bg-myGreen overflow-hidden">
				<div className="centered-flex flex-col h-3/5 bg-myGreen text-white">
					<HiOutlinePlusCircle size={175} />
					<h1 className="font-bold text-4xl">Exp-Share</h1>
				</div>
				<div className="h-2/5 bg-white px-8 py-12 rounded-t-4xl">
					<form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
						<h1 className="text-myDarkGray px-2">Add Expense</h1>
						<input
							className="input-field"
							type="text"
							placeholder="Title"
							name="title"
							value={expense.title}
							onChange={handleInputChange}
						/>
						<div className="flex gap-4">
							<input
								className="input-field w-1/2"
								type="number"
								placeholder="Amount"
								name="amount"
								value={expense.amount}
								onChange={handleInputChange}
							/>
							<SelectCategory
								value={expense.category_id}
								width="w-1/2"
								onChange={handleSelectChange}
							/>
						</div>
						<button type="submit" className="long-green-btn">
							Add
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

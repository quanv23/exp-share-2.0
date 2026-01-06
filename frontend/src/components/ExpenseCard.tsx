/**
 * <Summary> A card component to display the details of an expense</Summary>
 * <Description>
 *      Display card information as well as the ability to edit, and delete the expense when clicked
 * </Description>
 */
import { formatAmount, formatDate } from '../utils/functions';
import { useState } from 'react';
import ModalHelper from './ModalHelper';
import SelectCategory from './SelectCategory';
import SuccessDialog from './SuccesDialog';
import FailureDialog from './ErrorDialog';
import { DayPicker } from 'react-day-picker';
import type { EditExpense, Expense } from '../utils/types';

interface Props {
	/**
	 * The expense to be displayed in the card
	 */
	displayExpense: Expense;
	/**
	 * Callback function that refreshes the expenses after an expense is edited or deleted
	 */
	fetchExpenses: () => Promise<void>;
}

export default function ExpenseCard(props: Props) {
	const { displayExpense, fetchExpenses } = props;

	// State variables to control the display of success and error modals
	const [showError, setShowError] = useState<boolean>(false);
	const [showSuccess, setShowSuccess] = useState<boolean>(false);

	// State that determines whether to toggle delete confirmation
	const [deleteConfirmation, setDeleteConfirmation] = useState<boolean>(false);

	// State that determines whether to display the edit modal
	const [isOpen, setIsOpen] = useState<boolean>(false);

	// State that manage the date picker
	const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);

	// State that manages the data to be submitted when editting the expense
	const [expense, setExpense] = useState<EditExpense>({
		id: displayExpense.id,
		amount: displayExpense.amount,
		category_id: displayExpense.category_id.toString(),
		title: displayExpense.title,
		date: displayExpense.date,
	});

	// State that manages the selected date from the date picker
	// NOTE: This is separate from the expense state to avoid typing issues due to DatePicker returning a date object, while the expense date is a string
	const [selectedDate, setSelectedDate] = useState<Date>();

	/**
	 * Toggles the edit modal to be displayed
	 */
	function toggleModal(): void {
		setIsOpen(!isOpen);
	}

	/**
	 * Toggles the confrimation for deletion to be displayed
	 */
	function toggleDelete(): void {
		setDeleteConfirmation(!deleteConfirmation);
	}

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
	 * Handles when a date from DayPicker is selected
	 */
	function handleDayPickerSelect(date: Date | undefined): void {
		if (!date) return;

		// Sets both the selected date and the expense date
		setSelectedDate(date);
		setExpense({
			...expense,
			date: date.toISOString(),
		});
		setIsDatePickerOpen(false);
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
	 * Handles when a form is submitted and deletes the expense
	 */
	async function handleDeleteFormSubmit(event: React.FormEvent): Promise<void> {
		event.preventDefault();

		try {
			// Attempts to delete expense
			const res = await fetch(
				`http://127.0.0.1:3000/api/v1/expenses/${displayExpense.id}`,
				{
					method: 'DELETE',
				}
			);

			if (!res.ok) throw new Error();

			toggleModal(); // Closes edit modal
			toggleSuccessModal(); // Shows success modal
			fetchExpenses(); // Refreshes expenses list
		} catch (error) {
			console.error('Error deleting expense:', error);
			toggleErrorModal();
		}
	}

	/**
	 * Handles when a form is submitted and updates an expense
	 */
	async function handleEditFormSubmit(event: React.FormEvent): Promise<void> {
		event.preventDefault();

		try {
			// Validate that all fields are filled out
			for (const key in expense) {
				if (expense[key as keyof EditExpense] === '') {
					throw new Error('All fields must be filled out');
				}
			}

			// Attempts to edit an expense by ID
			const res = await fetch(
				`http://127.0.0.1:3000/api/v1/expenses/${displayExpense.id}`,
				{
					method: 'PUT',
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify({ expense }),
				}
			);

			if (!res.ok) throw new Error();

			toggleModal(); // Closes edit modal
			toggleSuccessModal(); // Shows success modal
			fetchExpenses(); // Refreshes expenses list
		} catch (error) {
			console.error('Error editting expense: ', error);
			toggleErrorModal();
		}
	}

	return (
		<>
			{isOpen && (
				<ModalHelper onClose={toggleModal}>
					<div className="flex flex-col gap-4">
						<form onSubmit={handleEditFormSubmit} className="edit-modal">
							<h1 className="font-bold mb-4">Edit Expense</h1>
							<input
								type="text"
								name="title"
								value={expense.title}
								placeholder="Title"
								className="input-field w-full"
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="amount"
								value={expense.amount}
								placeholder="Amount"
								className="input-field w-full"
								onChange={handleInputChange}
							/>
							<SelectCategory
								value={expense.category_id}
								width="w-full"
								onChange={handleSelectChange}
							/>
							<button
								type="button"
								className="h-10 bg-myLightGray rounded-lg px-4 w-full text-left"
								onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
							>
								{expense.date === '' ? 'Select Date' : formatDate(expense.date)}
							</button>
							<button type="submit" className="long-green-btn">
								Edit
							</button>
						</form>
						<form onSubmit={handleDeleteFormSubmit} className="edit-modal">
							{deleteConfirmation ? (
								<div className="centered-flex w-full">
									<button
										type="button"
										onClick={toggleDelete}
										className="w-1/2"
									>
										Cancel
									</button>
									<button type="submit" className="red-btn w-1/2">
										Confirm
									</button>
								</div>
							) : (
								<button
									type="button"
									onClick={toggleDelete}
									className="red-btn w-full"
								>
									Delete
								</button>
							)}
						</form>
					</div>
				</ModalHelper>
			)}
			{isDatePickerOpen && (
				<ModalHelper onClose={() => setIsDatePickerOpen(false)}>
					<div className="flex flex-col items-center shadow-md rounded-xl bg-white p-6 gap-4;">
						<DayPicker
							mode="single"
							selected={selectedDate}
							onSelect={handleDayPickerSelect}
						/>
					</div>
				</ModalHelper>
			)}
			{showSuccess && (
				<ModalHelper onClose={toggleSuccessModal}>
					<SuccessDialog />
				</ModalHelper>
			)}
			{showError && (
				<ModalHelper onClose={toggleErrorModal}>
					<FailureDialog />
				</ModalHelper>
			)}
			<div
				onClick={toggleModal}
				className="flex items-center justify-between h-16 w-full border-1 rounded-xl py-4 pr-4 pl-3 border-myDarkGray"
			>
				<div className="flex items-center gap-3">
					<div
						className="w-10 h-10 rounded-full"
						style={{ backgroundColor: `${displayExpense.category.colour}` }}
					></div>
					<div>
						<h1 className="text-base">{displayExpense.title}</h1>
						<p className="text-myDarkGray text-xs">
							{formatDate(displayExpense.date)}
						</p>
					</div>
				</div>
				<div className="text-myRed text-base">
					{formatAmount(displayExpense.amount)}
				</div>
			</div>
		</>
	);
}

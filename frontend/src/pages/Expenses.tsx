import { useState, useEffect } from 'react';
import type { Expense } from '../utils/types';
import ExpenseCard from '../components/ExpenseCard';

export default function Expenses() {
	// State variable to hold all expenses from the backend
	const [expenses, setExpenses] = useState<Expense[]>([]);

	// Fetches expenses from backend on mount
	useEffect(() => {
		async function getExpenses(): Promise<void> {
			try {
				// Calls GET method to fetch expenses
				const res = await fetch('http://127.0.0.1:3000/api/v1/expenses');

				if (!res.ok) throw new Error();

				const data: Expense[] = await res.json();

				setExpenses(data);
			} catch (error) {
				console.error('Error fetching expenses:', error);
			}
		}
		getExpenses();
	}, []);

	// Maps all expenses to an expense card
	const expenseElements = expenses.map((expense) => {
		return <ExpenseCard expense={expense} />;
	});

	return (
		<div className="bg-myGreen mb-16">
			<div className="flex flex-col h-28 px-6 py-4">
				<div className="mt-auto">
					<p className="text-white text-sm">Total Expenses</p>
					<h1 className="text-white text-4xl font-bold">$100.00</h1>
				</div>
			</div>
			<div className="flex flex-col items-center gap-4 bg-white p-8 rounded-t-4xl">
				{expenseElements}
				<p className="text-myDarkGray text-sm">Displaying X of Y</p>
				<button className="long-green-btn">Load More</button>
			</div>
		</div>
	);
}

/**
 * <Summary> This file contains global type definitions used across the frontend application
 */

/**
 * Represents a new expense to be added to the database
 */
export interface NewExpense {
	amount: string;
	category_id: string;
	title: string;
}

/**
 * Represents an expense
 */
export interface Expense {
	id: number;
	amount: number;
	title: string;
	date: string;
	category: Category;
}

/**
 * Represents a category
 */
export interface Category {
	id: string;
	name: string;
	colour: string;
}

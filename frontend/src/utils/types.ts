/**
 * <Summary> This file contains global type definitions used across the frontend application
 */

/**
 * Represents a newly created expense
 */
export interface Expense {
	amount: string;
	category_id: string;
	title: string;
}

/**
 * Represents a category
 */
export interface Category {
	id: string;
	name: string;
	colour: string;
	created_at: string;
	updated_at: string;
}

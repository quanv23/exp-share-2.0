/**
 * Formats a number into money format as a string
 * Ex. 10 -> $10.00
 */
export function formatAmount(amount: number): string {
	// Converts to money format
	return new Intl.NumberFormat('en-CA', {
		style: 'currency',
		currency: 'CAD',
	}).format(amount);
}

/**
 * Formats a date string into this date format Day, Mon DD, YYYY
 * Ex. Thu, Dec 25, 2025
 */
export function formatDate(date: string): string {
	const d: Date = new Date(date);
	return d.toLocaleDateString('en-US', {
		weekday: 'short',
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});
}

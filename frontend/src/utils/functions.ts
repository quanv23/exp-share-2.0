/**
 * Summary:
 *   Formats a number into money format as a string
 *
 * Example:
 *   10 -> '$10.00'
 */
export function formatAmount(amount: number): string {
	// Converts to money format
	return new Intl.NumberFormat('en-CA', {
		style: 'currency',
		currency: 'CAD',
	}).format(amount);
}

/**
 * Summary:
 *   Formats a date string into this date format in local time (Day, Mon DD, YYYY)
 *
 * Note:
 *   The input date string must be in a format recognized by the Date consturctor
 *
 * Example:
 *   '2025-12-25' -> Thu, Dec 25, 2025
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

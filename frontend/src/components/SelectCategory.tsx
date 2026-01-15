import { useState, useEffect } from 'react';
import type { Category } from '../utils/types';

interface Props {
	/**
	 * The state field for the selected category updated in the onChange handler
	 */
	value: string;
	/**
	 * The width of the input field represented as a tailwind class (Ex. w-1/2)
	 */
	width: string;
	/**
	 * onChange handler that updates whenever a new option is selected
	 */
	onChange: (value: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * Summary:
 *   A reusable select dropdown component for selecting a category
 *
 * Description:
 *   Fetches the categories from the backend and displays them in a dropdown select input.
 */
export default function SelectCategory(props: Props) {
	const { value, width, onChange } = props;

	// State to hold the categories fetched from the backend
	const [categories, setCategories] = useState<Category[]>([]);

	// Fetch categories from the backend when the component mounts
	useEffect(() => {
		async function getCategories(): Promise<void> {
			try {
				// Fetch categories from the backend API
				const res = await fetch('http://127.0.0.1:3000/api/v1/categories');

				// Handle non-200 responses
				if (!res.ok) throw new Error();

				// Parse and set the categories state
				const data: Category[] = await res.json();
				setCategories(data);
			} catch (error) {
				console.error('Error fetching categories:', error);
				throw new Error('Failed to fetch categories');
			}
		}
		getCategories();
	}, []);

	// Generate option elements for each category
	const categoryElements = categories.map((category) => (
		<option key={category.id} value={category.id}>
			{category.name}
		</option>
	));

	return (
		<select
			className={`${width} h-10 bg-myLightGray rounded-lg px-3`}
			value={value}
			onChange={onChange}
		>
			<option value="">Category</option>
			{categoryElements}
		</select>
	);
}

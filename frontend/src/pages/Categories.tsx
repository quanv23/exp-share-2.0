import { useState, useEffect } from 'react';
import CategoryCard from '../components/CategoryCard';
import { Pie, PieChart } from 'recharts';
import type { CategoryWithExpenses } from '../utils/types';

/**
 * Represents the pie chart data
 * Uses index signature to match the typing of ChartDateInput in ReCharts
 */
interface PieChartData {
	name: string;
	value: number;
	[key: string]: number | string;
}

/**
 * Summary:
 *   A page that displays all categories as well as their summarized data in a pie chart.
 *   Users can create new categories as well as select existing categories to view more details
 */
export default function Categories() {
	// State for categories, colours, and pie chart data
	const [categories, setCategories] = useState<CategoryWithExpenses[]>([]);
	const [pieChartData, setPieChartData] = useState<PieChartData[]>([]);

	useEffect(() => {
		// Fetch all categories with their expenses
		async function fetchCategories(): Promise<void> {
			try {
				const res = await fetch(
					'http://127.0.0.1:3000/api/v1/categories/expenses'
				);

				if (!res.ok) throw new Error();

				// Parses and assigns fetched categories
				const data: CategoryWithExpenses[] = await res.json();
				setCategories(data);

				// Prepares data for pie chart
				setPieChartData(
					data.map((category: CategoryWithExpenses) => ({
						name: category.name,
						value: category.expenses.reduce(
							(sum, expense) => sum + expense.amount,
							0
						),
						fill: category.colour,
					}))
				);
			} catch (error) {
				console.error('Error fetching categories:', error);
			}
		}
		fetchCategories();
	}, []);

	// Renders category cards
	const categoryCards = categories.map((category: CategoryWithExpenses) => (
		<CategoryCard key={category.id} category={category} />
	));

	return (
		<div className="bg-myGreen mb-16">
			<div className="p-5">
				<div className="w-full aspect-square bg-white rounded-3xl p-4">
					<PieChart responsive className="w-full h-full ">
						<Pie
							data={pieChartData}
							dataKey="value"
							nameKey="name"
							isAnimationActive={false}
						></Pie>
					</PieChart>
				</div>
			</div>
			<div className="flex flex-col gap-4 bg-white p-8 rounded-t-4xl">
				<div className="text-myDarkGray">Categories</div>
				{categoryCards}
				<button className="long-green-btn">Add Category</button>
			</div>
		</div>
	);
}

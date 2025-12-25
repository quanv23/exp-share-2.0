/**
 * <Summary> A card component to display the details of an expense</Summary>
 * <Description>
 *      Display card information as well as the ability to edit, and delete the expense when clicked
 * </Description>
 */
import { formatAmount, formatDate } from '../utils/functions';
import type { Expense } from '../utils/types';

interface Props {
	/**
	 * The expense to be displayed in the card
	 */
	expense: Expense;
}

export default function ExpenseCard(props: Props) {
	const { expense } = props;

	return (
		<div className="flex items-center w-full">
			<div
				className="h-16 w-1/20 rounded-l-xl"
				style={{ backgroundColor: expense.category.colour }}
			></div>
			<div className="flex items-center justify-between h-16 w-19/20 p-4 border-t-1 border-r-1 border-b-1 rounded-r-xl border-myDarkGray">
				<div className="flex items-center">
					<div>
						<h1>{expense.title}</h1>
						<p>{formatDate(expense.date)}</p>
					</div>
				</div>
				<div>{formatAmount(expense.amount)}</div>
			</div>
		</div>
	);
}

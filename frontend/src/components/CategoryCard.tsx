import { NavLink } from 'react-router-dom';
import type { CategoryWithExpenses } from '../utils/types';

interface Props {
	category: CategoryWithExpenses;
}

/**
 * Summary:
 *   A card component to display category information
 */
export default function CategoryCard(props: Props) {
	const { category } = props;

	return (
		<NavLink to={`./${category.id}`}>
			<div>{category.name}</div>
		</NavLink>
	);
}

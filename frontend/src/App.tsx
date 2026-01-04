import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Expenses from './pages/Expenses';
import Notes from './pages/Notes';
import Layout from './layouts/Layout';
import 'react-day-picker/style.css';

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/categories">
					<Route index element={<Categories />} />
					<Route path=":id" element={<Category />} />
				</Route>
				<Route path="/expenses" element={<Expenses />} />
				<Route path="/notes" element={<Notes />} />
				<Route path="*" element={<h2>Page Not Found</h2>} />
			</Route>
		</Routes>
	);
}

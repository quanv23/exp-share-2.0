import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Expenses from './pages/Expenses';
import Notes from './pages/Notes';
import Footer from './layouts/Footer';

export default function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link to="/categories">Categories</Link>
					</li>
					<li>
						<Link to="/expenses">Expenses</Link>
					</li>
					<li>
						<Link to="/notes">Notes</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route element={<Footer />}>
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
		</>
	);
}

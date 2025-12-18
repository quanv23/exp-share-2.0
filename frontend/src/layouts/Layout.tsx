import { Outlet, NavLink } from 'react-router-dom';
import {
	HiChartBar,
	HiCurrencyDollar,
	HiFolder,
	HiPlusCircle,
	HiTag,
} from 'react-icons/hi2';

export default function Layout() {
	return (
		<div className="h-screen flex flex-col pb-15">
			<Outlet />
			<footer className="h-[60px] centered-flex gap-10 p-4 w-screen fixed bottom-0 left-0 shadow-lg bg-white navbar-shadow">
				<NavLink
					to="/"
					className={({ isActive }) =>
						`${isActive ? `text-black` : `text-myDarkGray`}`
					}
				>
					<HiPlusCircle size={22} />
				</NavLink>
				<NavLink
					to="/dashboard"
					className={({ isActive }) =>
						`${isActive ? `text-black` : `text-myDarkGray`}`
					}
				>
					<HiChartBar size={22} />
				</NavLink>
				<NavLink
					to="/categories"
					className={({ isActive }) =>
						`${isActive ? `text-black` : `text-myDarkGray`}`
					}
				>
					<HiTag size={22} />
				</NavLink>
				<NavLink
					to="/expenses"
					className={({ isActive }) =>
						`${isActive ? `text-black` : `text-myDarkGray`}`
					}
				>
					<HiCurrencyDollar size={22} />
				</NavLink>
				<NavLink
					to="/notes"
					className={({ isActive }) =>
						`${isActive ? `text-black` : `text-myDarkGray`}`
					}
				>
					<HiFolder size={22} />
				</NavLink>
			</footer>
		</div>
	);
}

import { Routes, Route } from "react-router-dom";
import Card from "./Components/Card";
import NavigationBar from "./Components/NavigationBar";

import PageLayout from "./Layouts/PageLayout";
import Home from './Pages/Home'
import Wishlist from "./Pages/Wishlist";

function App() {
	return (
		<>
			<NavigationBar />

			<Routes>
				<Route element={<PageLayout />}>
					<Route path="/" index element={<Home />} />
					<Route path="wishlist" element={<Wishlist />} />
				</Route>
			</Routes>

			{/* <div className="app antialiased bg-gray-100 text-gray-900 p-6">
				<div className="container mx-auto">
					<div className="flex flex-wrap -mx-4">
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div> */}
		</>
	);
}

export default App;

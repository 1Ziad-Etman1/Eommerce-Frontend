import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import { mockData } from "../assets/mockData";
import ProductCard from "../components/ProductCard";

const Shop = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product);
	useEffect(() => {
		dispatch(setProducts(mockData));
	}, []);
	return (
		<div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
			<h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
				{products.products.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</div>
	);
};

export default Shop;
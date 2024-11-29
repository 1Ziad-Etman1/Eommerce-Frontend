import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";

const Checkout = () => {
	const [billingToggle, setBillingToggle] = useState(true);
	const [shippingToggle, setShippingToggle] = useState(false);
	const [paymentToggle, setPaymentToggle] = useState(false);

	const [paymentMethod, setPaymentMethod] = useState("cod"); // cash on delivery
    const [shippingInfo, setShippingInfo] = useState({
        address:'',
        city:'',
        zip:''
    })

	const cart = useSelector((state) => state.cart);
	return (
		<div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
			<h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
			<div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
				<div className="md:w-2/3">
					<div className="border p-2 mb-6">
						<div
							className="flex items-center justify-between"
							onClick={() => setBillingToggle(!billingToggle)}
						>
							<h3 className="text-lg font-semibold mb-2">
								Billing info
							</h3>
							{billingToggle ? <FaAngleDown /> : <FaAngleUp />}
						</div>
						<div
							className={`space-y-4 ${
								billingToggle ? "" : "hidden"
							}`}
						>
							<div>
								<label
									htmlFor="name"
									className="block text-gray-700"
								>
									Name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									placeholder="Enter your Name"
									className="w-full px-3 py-2 border"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-gray-700"
								>
									Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Enter your Email"
									className="w-full px-3 py-2 border"
								/>
							</div>

							<div>
								<label
									htmlFor="phone"
									className="block text-gray-700"
								>
									Phone
								</label>
								<input
									type="text"
									name="phone"
									id="phone"
									placeholder="Enter your Phone number"
									className="w-full px-3 py-2 border"
								/>
							</div>
						</div>
					</div>

					<div className="border p-2 mb-6">
						<div
							className="flex items-center justify-between"
							onClick={() => setShippingToggle(!shippingToggle)}
						>
							<h3 className="text-lg font-semibold mb-2">
								Shipping info
							</h3>
							{billingToggle ? <FaAngleDown /> : <FaAngleUp />}
						</div>
						<div
							className={`space-y-4 ${
								shippingToggle ? "" : "hidden"
							}`}
						>
							<div>
								<label
									htmlFor="address"
									className="block text-gray-700"
								>
									Address
								</label>
								<input
									type="text"
									name="address"
									id="address"
									placeholder="Enter Address"
									className="w-full px-3 py-2 border"
									onChange={(e) =>
										setShippingInfo({
											...shippingInfo,
											address: e.target.value,
										})
									}
								/>
							</div>

							<div>
								<label
									htmlFor="city"
									className="block text-gray-700"
								>
									City
								</label>
								<input
									type="text"
									name="city"
									id="city"
									placeholder="Enter City"
									className="w-full px-3 py-2 border"
									onChange={(e) =>
										setShippingInfo({
											...shippingInfo,
											city: e.target.value,
										})
									}
								/>
							</div>

							<div>
								<label
									htmlFor="zip"
									className="block text-gray-700"
								>
									Zip Code
								</label>
								<input
									type="text"
									name="zip"
									id="zip"
									placeholder="Enter Zip Code"
									className="w-full px-3 py-2 border"
									onChange={(e) =>
										setShippingInfo({
											...shippingInfo,
											zip: e.target.value,
										})
									}
								/>
							</div>
						</div>
					</div>

					<div className="border p-2 mb-6">
						<div
							className="flex items-center justify-between"
							onClick={() => setPaymentToggle(!paymentToggle)}
						>
							<h3 className="text-lg font-semibold mb-2">
								Payment Method
							</h3>
							{paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
						</div>
						<div
							className={`space-y-4 ${
								paymentToggle ? "" : "hidden"
							}`}
						>
							<div className="flex mb-2 items-center">
								<input
									type="radio"
									name="payment"
									id="pay1"
									checked={paymentMethod === "cod"}
									onChange={() => setPaymentMethod("cod")}
								/>
								<label
									htmlFor="pay1"
									className="block text-gray-700 ml-2"
								>
									Cash on Delivry
								</label>
							</div>
							<div className="flex mb-2 items-center">
								<input
									type="radio"
									name="payment"
									id="pay2"
									checked={paymentMethod === "dc"}
									onChange={() => setPaymentMethod("dc")}
								/>
								<label
									htmlFor="pay2"
									className="block text-gray-700 ml-2"
								>
									Debit Card
								</label>
							</div>

							{paymentMethod === "dc" && (
								<div className="bg-gray-200 border p-2 mb-6 rounded">
									<div className="flex items-center justify-between">
										<h3 className="text-lg font-semibold mb-2">
											Debit Card info
										</h3>
									</div>
									<div className={`space-y-4`}>
										<div>
											<label
												htmlFor="cardnum"
												className="block text-gray-700 font-bold"
											>
												Card Number
											</label>
											<input
												type="text"
												name="cardnum"
												id="cardnum"
												placeholder="Enter Card Number"
												className="w-full px-3 py-2 border"
											/>
										</div>

										<div>
											<label
												htmlFor="holder"
												className="block text-gray-700 font-bold"
											>
												Card Holder Name
											</label>
											<input
												type="text"
												name="holder"
												id="holder"
												placeholder="Enter Holder Name"
												className="w-full px-3 py-2 border"
											/>
										</div>
										<div className="flex justify-between mb-4">
											<div className="w-1/2 mr-2">
												<label
													htmlFor="expdate"
													className="block text-gray-700 font-bold"
												>
													Expire Date
												</label>
												<input
													type="text"
													name="expdate"
													id="expdate"
													placeholder="Enter Expire Date"
													className="w-full px-3 py-2 border"
												/>
											</div>
											<div className="w-1/2 ml-2">
												<label
													htmlFor="cvv"
													className="block text-gray-700 font-bold"
												>
													CVV
												</label>
												<input
													type="text"
													name="cvv"
													id="cvv"
													placeholder="Enter CVV"
													className="w-full px-3 py-2 border"
												/>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
					<h3 className="text-lg font-semibold mb-4">
						Order Summary
					</h3>
					<div className="space-y-4">
						{cart.products.map((product) => (
							<div
								key={product.id}
								className="flex justify-between"
							>
								<div className="flex items-center">
									<img
										src={product.image}
										alt={`${product.name}`}
										className="w-16 h-16 object-contain rounded"
									/>
									<div className="ml-4">
										<h4 className="text-md font-semibold">
											{product.name}
										</h4>
										<p className="text-gray-600">
											{product.price} x {product.quantity}
										</p>
									</div>
								</div>
								<div className="text-gray-800 flex items-center">
									${product.price * product.quantity}
								</div>
							</div>
						))}
					</div>
					<div className="mt-4 border-t pt-4">
						<div className="flex justify-between">
							<span>Total Price:</span>
							<span className="font-semibold">
								${cart.totalPrice.toFixed(2)}
							</span>
						</div>
					</div>
					<button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800">
						Place Order
					</button>
				</div>
			</div>
		</div>
	);
};

export default Checkout;

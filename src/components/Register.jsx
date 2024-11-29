

// eslint-disable-next-line react/prop-types
const Register = ({toggleLoginSignUp}) => {
    return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Sign Up</h2>
			<form>
				<div className="mb-4">
					<label htmlFor="name" className="block text-gray-700">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="w-full px-3 py-2 border"
						placeholder="Enter your Name"
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-700">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="w-full px-3 py-2 border"
						placeholder="Enter Email"
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="password" className="block text-gray-700">
						Password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						className="w-full px-3 py-2 border"
						placeholder="Enter Password"
					/>
				</div>

				<div className="mb-4">
					<button
						type="submit"
						className="w-full bg-red-600 text-white py-2"
					>
						Sign Up
					</button>
				</div>
			</form>
			<div className="text-center">
				<span className="text-gray-700">Already have an account? </span>
				<button
					className="text-red-800"
					onClick={() => toggleLoginSignUp()}
				>
					Login
				</button>
			</div>
		</div>
	);
}

export default Register;

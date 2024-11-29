

// eslint-disable-next-line react/prop-types
const Login = ({toggleLoginSignUp}) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border" placeholder="Enter Email"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input type="password" id="password" name="password" className="w-full px-3 py-2 border" placeholder="Enter Password"/>
                </div>
                <div className="mb-4 flex items-center justify-between">
                    <label className="inline-flex items-center">
                        <input type="checkbox" name="" id="" className="form-checkbox"/>
                        <span className="ml-2 text-gray-700">Remember me</span>
                    </label>
                    <a href="#" className="text-red-800">Forgot Password?</a>
                </div>
                <div className="mb-4">
                    <button type="submit" className="w-full bg-red-600 text-white py-2">Login</button>
                </div>
            </form>
            <div className="text-center">
                <span className="text-gray-700">Do not have an account? </span>
                <button className="text-red-800" onClick={()=>toggleLoginSignUp()}>Sign Up</button>
            </div>
        </div>
    );
}

export default Login;

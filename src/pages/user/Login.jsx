import { Input } from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";

function Login() {
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back!</h2>
                    <form>
                        {/* Email or Phone Number Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Email or Phone Number</label>
                            <Input placeholder="Enter your email or phone number" required/>
                        </div>
                        {/* Password Section */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <Input type="password" placeholder="Enter your password" required/>
                        </div>
                        {/* Login Button */}
                        <Button type="submit" className="w-full">Login</Button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up
                        here</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;
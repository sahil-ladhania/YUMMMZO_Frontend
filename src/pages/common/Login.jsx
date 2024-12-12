import { Input } from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
import { useState } from "react";

function Login() {
    // State Variables
    const [formData , setFormData] = useState({
        email : "",
        password : ""
    });
    console.log(formData);
    console.log(setFormData);

    // Handler Functions
    const handleLogin = (e) => {
        console.log(e);
    }
    const handleInputChange = (e) => {
        console.log(e);
    }
    

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back!</h2>
                    <form onSubmit={handleLogin}>
                        {/* Email Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <Input 
                                onChange={handleInputChange} 
                                name="email" 
                                value={formData.email} 
                                placeholder="Enter your email" 
                                required
                            />
                        </div>
                        {/* Password Section */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <Input 
                                onChange={handleInputChange} 
                                type="password" 
                                name="password" 
                                value={formData.password} 
                                placeholder="Enter your password" 
                                required
                            />
                        </div>
                        {/* Login Button */}
                        <Button type="submit" className="w-full">Login</Button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Dont have an account?
                        <Link className="text-blue-600 hover:underline" to="/user/signup">Sign up here</Link>
                    </p>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Forgot your password?
                        <Link className="text-blue-600 hover:underline" to="/user/change-password">Reset it here</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;
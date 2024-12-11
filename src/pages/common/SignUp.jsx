import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";

function SignUp() {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
                    <form>
                        {/* First Name Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">First Name</label>
                            <Input  type="text" name="firstName"  placeholder="Enter your first name" required/>
                        </div>
                        {/* Last Name Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Last Name</label>
                            <Input name="lastName"  placeholder="Enter your last name" required/>
                        </div>
                        {/* Email Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <Input type="email" name="email"  placeholder="Enter your email" required/>
                        </div>
                        {/* Phone Number Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Phone Number</label>
                            <Input type="tel" name="phoneNumber"  placeholder="Enter your phone number" required/>
                        </div>
                        {/* Password Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <Input type="password" name="password"  placeholder="Enter your password" required/>
                        </div>
                        {/* Signup Button */}
                        <Button type="submit" className="w-full">Sign Up</Button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Already have an account?
                        <Link className="text-blue-600 hover:underline" to="/user/login">Sign in here</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default SignUp;
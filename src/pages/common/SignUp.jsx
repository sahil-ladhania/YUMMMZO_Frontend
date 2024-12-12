import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

function SignUp() {
    // State Variables
    const [formData , setFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        phoneNumber : "",
        password : "",
        role : ""
    });
    console.log(formData);
    console.log(setFormData);

    // Handler Functions
    const handleSignup = (e) => {
        console.log(e);
    }
    const handleInputChange = (e) => {
        console.log(e);
    }
    
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
                    <form onSubmit={handleSignup}>
                        {/* First Name Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">First Name</label>
                            <Input 
                                onChange={handleInputChange}  
                                type="text" 
                                name="firstName" 
                                value={formData.firstName} 
                                placeholder="Enter your first name" 
                                required
                            />
                        </div>
                        {/* Last Name Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Last Name</label>
                            <Input 
                                onChange={handleInputChange} 
                                type="text" 
                                name="lastName" 
                                value={formData.lastName}  
                                placeholder="Enter your last name" 
                                required
                            />
                        </div>
                        {/* Email Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <Input 
                                onChange={handleInputChange} 
                                type="email" 
                                name="email" 
                                value={formData.email}  
                                placeholder="Enter your email" 
                                required
                            />
                        </div>
                        {/* Phone Number Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Phone Number</label>
                            <Input 
                                onChange={handleInputChange} 
                                type="tel" 
                                name="phoneNumber" 
                                value={formData.phoneNumber}  
                                placeholder="Enter your phone number" 
                                required
                            />
                        </div>
                        {/* Password Section */}
                        <div className="mb-4">
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
                        {/* Role Selection Dropdown */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Select Role</label>
                            <Select name="role" required>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select your role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="CUSTOMER">Customer</SelectItem>
                                    <SelectItem value="VENDOR">Vendor</SelectItem>
                                    <SelectItem value="COURIER">Courier</SelectItem>
                                </SelectContent>
                            </Select>
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
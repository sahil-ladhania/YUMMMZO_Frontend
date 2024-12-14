import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signupFailure, signupStart } from "@/redux/slices/userSlice";
import { signup } from "@/services/auth/authService";
import { useNavigate } from "react-router-dom";

function SignUp() {
    // useNavigate 
    const navigate = useNavigate();

    // Selector and Dispatch
    const dispatch = useDispatch();
    const { signupLoading, signupSuccess, signupError } = useSelector((state) => state.user);

    // State Variables
    const [formData , setFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        phoneNumber : "",
        password : "",
        role : ""
    });

    // Handler Functions
    const handleSignup = async(e) => {
        e.preventDefault();
        dispatch(signupStart());
        try{
            const response = await signup(formData);
            dispatch(signupSuccess(response));
            navigate("/user/login");
        }
        catch(error){
            dispatch(signupFailure(error.message));
        }
        setFormData({
            firstName : "",
            lastName : "",
            email : "",
            phoneNumber : "",
            password : "",
            role : ""
        })
    }
    const handleInputChange = (e) => {
        e.preventDefault();
        const {name , value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
                    {signupLoading && <p className="text-blue-600">Loading...</p>}
                    {signupSuccess && <p className="text-green-600">Signup successful! Welcome aboard!</p>}
                    {signupError && <p className="text-red-500">{signupError}</p>}
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
                            <Select 
                                onValueChange={(value) => 
                                    setFormData({
                                        ...formData,
                                        role : value
                                    })
                                }
                                name="role" 
                                value={formData.role}
                                required>
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
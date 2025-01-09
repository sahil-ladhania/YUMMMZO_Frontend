import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import {Link, useNavigate} from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signupFailure, signupStart , signupSuccessfull } from "@/redux/slices/userSlice";
import { signup } from "@/services/auth/authService";

function SignUp() {
    // useNavigate
    const navigate = useNavigate();
    // Selector and Dispatch
    const dispatch = useDispatch();
    const { signupLoading, signupSuccess , signupError } = useSelector((state) => state.user);

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
    const handleInputChange = (e) => {
        // prevent kro input feild ka default behavior
        e.preventDefault();
        // retrieve kro name aur value inputfeild se
        const {name , value} = e.target;
        // set kro form data 
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSignup = async(e) => {
        // prevent kro form ka default behavior
        e.preventDefault();
        // signupStart() function for dispatch kro 
        dispatch(signupStart());
        try{
            // call kro signup api ko jo backend mai jaa k controller ko call kr dega -> data save ho jayega 
            const response = await signup(formData); // response mai data mil ra user ka 
            dispatch(signupSuccessfull(response)); // yaha data ko signupSuccessfull() k ander pass kr rhe hai 
            // -----can show an alert for successfull signup-----
        }
        catch(error){
            dispatch(signupFailure(error.message)); // yaha agr koi error aya to signupFailure() k ander error message pass kr rhe hai 
        }
        // Jb signup successfull ho jaye to input ko empty kr do
        setFormData({
            firstName : "",
            lastName : "",
            email : "",
            phoneNumber : "",
            password : "",
            role : ""
        })
        // ab user ko Login Page pe redirect kr do
        setTimeout(() => {
            // -----can show an alert that redirecting to login page-----
            navigate('/user/login');
        }, 2000);
    }

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-center roboto-regular">Create an Account</h2>
                    {signupLoading && <p className="text-blue-600 roboto-regular">Loading...</p>}
                    {signupSuccess && <p className="text-green-600 roboto-regular">Signup successful! Welcome aboard!</p>}
                    {signupError && <p className="text-red-500">{signupError}</p>}
                    <form onSubmit={handleSignup}>
                        {/* First Name Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1 roboto-regular">First Name</label>
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
                            <label className="block text-sm font-medium mb-1 roboto-regular">Last Name</label>
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
                            <label className="block text-sm font-medium mb-1 roboto-regular">Email</label>
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
                            <label className="block text-sm font-medium mb-1 roboto-regular">Phone Number</label>
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
                            <label className="block text-sm font-medium mb-1 roboto-regular">Password</label>
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
                            <label className="block text-sm font-medium mb-1 roboto-regular">Select Role</label>
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
                                    <SelectItem className="roboto-regular" value="CUSTOMER">Customer</SelectItem>
                                    <SelectItem className="roboto-regular" value="VENDOR">Vendor</SelectItem>
                                    <SelectItem className="roboto-regular" value="COURIER">Courier</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        {/* Signup Button */}
                        <Button type="submit" className="w-full roboto-regular bg-black text-white hover:bg-black">Sign Up</Button>
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
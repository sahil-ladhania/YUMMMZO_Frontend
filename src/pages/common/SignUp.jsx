import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";
import {signUp} from "@/services/auth/authService.js";

function SignUp() {
    // State Variables
    const [formData , setFormData] = useState({
        firstName : "",
        lastName : "",
        phoneNumber : "",
        email : "",
        password: "",
    });

    // Handler Functions
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await signUp(formData);
            console.log("User signed up successfully:", response);
        }
        catch(error){
            console.log(error.message);
        }
        console.log("Form submitted : " , formData);
        setFormData({
            firstName : "",
            lastName : "",
            phoneNumber : "",
            email : "",
            password: "",
        })
    }
    const handleChange = (e) => {
        e.preventDefault();
        const { name , value } = e.target;
        console.log(value);
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
                    <form onSubmit={handleSubmit}>
                        {/* First Name Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">First Name</label>
                            <Input onChange={handleChange} type="text" name="firstName" value={formData.firstName} placeholder="Enter your first name" required/>
                        </div>
                        {/* Last Name Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Last Name</label>
                            <Input onChange={handleChange} name="lastName" value={formData.lastName} placeholder="Enter your last name" required/>
                        </div>
                        {/* Email Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <Input onChange={handleChange} type="email" name="email" value={formData.email} placeholder="Enter your email" required/>
                        </div>
                        {/* Phone Number Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Phone Number</label>
                            <Input onChange={handleChange} type="tel" name="phoneNumber" value={formData.phoneNumber} placeholder="Enter your phone number" required/>
                        </div>
                        {/* Password Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <Input onChange={handleChange} type="password" name="password" value={formData.password} placeholder="Enter your password" required/>
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
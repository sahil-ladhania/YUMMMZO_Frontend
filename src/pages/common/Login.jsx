import { Input } from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/services/auth/authService";
import { loginStart , loginFailure, loginSuccessfull } from "@/redux/slices/authSlice";
import { setUser } from "@/redux/slices/userSlice";

function Login() {
    
    // useNavigate
    const navigate = useNavigate();

    // Dispatch and Selector
    const dispatch = useDispatch();
    const { loginloading , loginSuccess , loginError , isAuthenticated , user} = useSelector((state) => state.auth);
    const userRole = user ? user.role : null;

    // State Variables
    const [formData , setFormData] = useState({
        email : "",
        password : ""
    });

    // Handler Functions
    const handleInputChange = (e) => {
        e.preventDefault();
        const {name , value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleLogin = async(e) => {
        e.preventDefault();
        dispatch(loginStart());
        try{
            const response = await login(formData); 
            const user = response.existingUser; 
            if(!user){
                throw new Error("Invalid Credentials !!!");
            };
            dispatch(loginSuccessfull({
                existingUser : response.existingUser
            }));
            dispatch(setUser({
                firstName : user.firstName,
                lastName : user.lastName,
                email : user.email,
                role : user.role
            }))
        }
        catch(error){
            dispatch(loginFailure(error.message));  
        }
        setFormData({
            email : "",
            password : ""
        })
        setTimeout(() => {
            navigate('/user/');
        }, 2000);
    }
    
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="max-w-md w-full p-8 rounded-lg shadow-md bg-white roboto-regular">
                    <h2 className="text-2xl font-bold mb-6 text-center text-black roboto-regular">Welcome Back!</h2>
                    {loginloading && <p className="text-blue-600 roboto-regular">Loading...</p>}
                    {loginSuccess && <p className="text-green-600 roboto-regular">Login successful! Welcome User !</p>}
                    {loginError && <p className="text-red-500 roboto-regular">{loginError || `Login failed. Please try again.`}</p>}
                    <form onSubmit={handleLogin}>
                        {/* Email Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1 text-black">Email</label>
                            <Input 
                                className="roboto-regular"
                                onChange={handleInputChange} 
                                type="email"
                                name="email" 
                                value={formData.email} 
                                placeholder="Enter your email" 
                                required
                            />
                        </div>
                        {/* Password Section */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-1 text-black">Password</label>
                            <Input 
                                className="roboto-regular"
                                onChange={handleInputChange} 
                                type="password" 
                                name="password" 
                                value={formData.password} 
                                placeholder="Enter your password" 
                                required
                            />
                        </div>
                        {/* Login Button */}
                        <Button type="submit" className="w-full roboto-regular bg-black text-white hover:bg-black">Login</Button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600 roboto-regular">
                        Dont have an account?
                        <Link className="text-blue-600 hover:underline roboto-regular" to="/user/signup">Sign up here</Link>
                    </p>
                    <p className="mt-2 text-center text-sm text-gray-600 roboto-regular">
                        Forgot your password?
                        <Link className="text-blue-600 hover:underline roboto-regular" to="/user/change-password">Reset it here</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;
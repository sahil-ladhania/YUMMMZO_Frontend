import { Input } from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {authenticateUser} from "@/services/auth/authService.js";
import {setUser} from "@/redux/slices/userSlice.js";
import {login} from "@/redux/slices/authSlice.js";
import Cookies from "js-cookie";

function Login() {
    // State Variables
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const dispatch = useDispatch();
    console.log(dispatch);
    console.log(useDispatch);
    console.log(useDispatch());

    // Handler Functions
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await authenticateUser(formData);
            const user = response.existingUser;
            console.log("User logged in successfully : ", user);
            const token = Cookies.get("jwt"); // Issue in this Line -> Because not getting the Cookies , so cant get the token.
            if(!token){
                throw new Error("Authentication token not found");
            };
            // 	These dispatch calls send actions (login, setUser) to the Redux store.
            dispatch(login({token}));
            dispatch(setUser({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
            }));
            setFormData({
                email: "",
                password: ""
            })
            console.log("Form submitted : " , formData);
        }
        catch(error){
            console.error("Login failed : ", error.message);
        }
    }
    const handleChange = (e) => {
        e.preventDefault();
        const { name , value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back!</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Email or Phone Number Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Email or Phone Number</label>
                            <Input onChange={handleChange} name="email" value={formData.email} placeholder="Enter your email" required/>
                        </div>
                        {/* Password Section */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <Input onChange={handleChange} type="password" name="password" value={formData.password} placeholder="Enter your password" required/>
                        </div>
                        {/* Login Button */}
                        <Button type="submit" className="w-full">Login</Button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Don't have an account?
                        <Link className="text-blue-600 hover:underline" to="/user/signup">Sign up here</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;
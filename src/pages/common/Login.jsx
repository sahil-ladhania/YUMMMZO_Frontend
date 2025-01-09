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

    // State Variables
    const [formData , setFormData] = useState({
        email : "",
        password : ""
    });

    console.log("isAuthenticated : " , isAuthenticated);
    console.log("user : " , user);

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

    const handleLogin = async(e) => {
        // prevent kro form ka default behavior
        e.preventDefault();
        // loginStart() function for dispatch kro 
        dispatch(loginStart());
        try{
            // call kro login api ko jo backend mai jaa k controller ko call kr dega -> verification hoga fir uske according login hoga ya ni hoga
            const response = await login(formData); // response mai data mil ra user ka agr agr user email password shi hoga wrna error fekega
            console.log(response);
            const user = response.existingUser; // response object mai do chiz mil ra message and existingUser object -> to existingUser object user variable mai save kr lo
            console.log(user); // user object mil ra hai
            // const token = Cookies.get('jwt'); // Issue -> Not getting the Cookie & The Cookie is not Persistent which means on refresh the Cookie is getting vanished
            console.log("isAuthenticated : " , isAuthenticated); // false mil ra -> Bcoz abi user authenticate ni hua hai kyu ki token ni mila 
            console.log("user : " , user); // user object mil ra jo login kia hai
            // agr user ni mile to error feko
            if(!user){
                throw new Error("Invalid Credentials !!!");
            };
            // agr user mil jaye -> to loginSuccess() Function dispatch kro aur pass kro ek object with -> token and existingUser Object
            dispatch(loginSuccessfull({
                existingUser : response.existingUser
            }));
            // And fir user set kr do -> setUser() Function ko dispatch kro 
            dispatch(setUser({
                firstName : user.firstName,
                lastName : user.lastName,
                email : user.email,
                role : user.role
            }))
            console.log("Login Successfull!!!");
        }
        catch(error){
            dispatch(loginFailure(error.message));  // yaha agr koi error aya to loginFailure() k ander error message pass kr rhe hai 
        }
        // Jb login successfull ho jaye to input ko empty kr do
        setFormData({
            email : "",
            password : ""
        })
        // ab user ko Home Page pe redirect kr do
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
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePasswordFailure, changePasswordStart } from "@/redux/slices/userSlice";
import { changePassword } from "@/services/auth/authService";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
    // Navigate
    const navigate = useNavigate();

    // Dispatch and Selector
    const dispatch = useDispatch();
    const {changePasswordLoading , changePasswordSuccess , changePasswordError} = useSelector((state) => state.user);

    // State Variables
    const [formData , setFormData] = useState({
        email : "",
        password : "",
        newPassword : "",
        confirmPassword : ""
    })

    // Handler Functions
    const handleChangePassword = async(e) => {
        e.preventDefault();
        dispatch(changePasswordStart());
        if (formData.newPassword !== formData.confirmPassword) {
            return dispatch(changePasswordFailure("Passwords do not match !!!"));
        }
        try{
            console.log("Before Calling Api...");
            const response = await changePassword(formData);
            console.log("After Calling Api...");
            console.log(response);
            dispatch(changePasswordSuccess(response));
            navigate("/user/login");
        }
        catch(error){
            dispatch(changePasswordFailure(error.message));
        }
        setFormData({
            email : "",
            password : "",
            newPassword : "",
            confirmPassword : ""
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
                    <h2 className="text-2xl font-bold mb-6 text-center">Change Password</h2>
                    {changePasswordLoading && <p className="text-blue-600">Loading...</p>}
                    {changePasswordSuccess && <p className="text-green-600">Signup successful! Welcome aboard!</p>}
                    {changePasswordError && <p className="text-red-500">{changePasswordError}</p>}
                    <form onSubmit={handleChangePassword}>
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
                        {/* Current Password Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Current Password</label>
                            <Input 
                                onChange={handleInputChange}
                                type="password" 
                                name="password" 
                                value={formData.password}
                                placeholder="Enter your current password" 
                                required 
                            />
                        </div>
                        {/* New Password Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">New Password</label>
                            <Input 
                                onChange={handleInputChange}
                                type="password" 
                                name="newPassword" 
                                value={formData.newPassword}
                                placeholder="Enter your new password" 
                                required 
                            />
                        </div>
                        {/* Confirm Password Section */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-1">Confirm Password</label>
                            <Input 
                                onChange={handleInputChange}
                                type="password" 
                                name="confirmPassword" 
                                value={formData.confirmPassword}
                                placeholder="Re-enter your new password" 
                                required 
                            />
                        </div>
                        {/* Submit Button */}
                        <Button type="submit" className="w-full">Change Password</Button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ChangePassword;
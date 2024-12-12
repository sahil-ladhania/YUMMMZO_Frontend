import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { useState } from "react";

function ChangePassword() {
    // State Variables
    const [formData , setFormData] = useState({
        email : "",
        currentPassword : "",
        newPassword : "",
        confirmPassword : ""
    })
    console.log(formData);
    console.log(setFormData);

    // Handler Functions
    const handleChangePassword = (e) => {
        console.log(e);
    }
    const handleInputChange = (e) => {
        console.log(e);
    }

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Change Password</h2>
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
                                value={formData.currentPassword}
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
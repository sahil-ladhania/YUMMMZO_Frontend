import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";

function SignUp() {
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
                    <form>
                        {/* Name Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <Input placeholder="Enter your name" required/>
                        </div>
                        {/* Email Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <Input type="email" placeholder="Enter your email" required/>
                        </div>
                        {/* Phone Number Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Phone Number</label>
                            <Input type="tel" placeholder="Enter your phone number" required/>
                        </div>
                        {/* Password Section */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <Input type="password" placeholder="Enter your password" required/>
                        </div>
                        {/* Confirm Password Section */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-1">Confirm Password</label>
                            <Input type="password" placeholder="Confirm your password" required/>
                        </div>
                        {/* Signup Button */}
                        <Button type="submit" className="w-full">Sign Up</Button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Already have an account? <a href="/src/pages/common/Login" className="text-blue-600 hover:underline">Login
                        here</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default SignUp;
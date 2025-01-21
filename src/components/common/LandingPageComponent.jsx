import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function LandingPageComponent() {
  return (
    <>
        <h1 className="text-white h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
            <div className="text-center p-8 rounded-lg shadow-lg bg-gradient-to-br from-neutral-900 to-neutral-800">
                <h2 className="text-4xl font-bold mb-4 text-orange-400 roboto-regular">
                    Welcome Back, Partner !
                </h2>
                <p className="mb-6 roboto-regular text-neutral-400 text-md">
                    To manage your dashboard, please log in to access your insights, orders, and customer feedback.
                </p>
                <div className="flex justify-center mb-6">
                    <img 
                        src="https://cdni.iconscout.com/illustration/premium/thumb/admin-panel-illustration-download-in-svg-png-gif-file-formats--web-content-design-website-layout-and-software-development-services-pack-illustrations-3726711.png" 
                        alt="Food Delivery Illustration" 
                        className="rounded-lg w-72"
                    />
                </div>
                <Link to="/user/login">
                    <Button className="bg-white text-black  hover:bg-white roboto-regular">Login Now</Button>
                </Link>
                <p className="text-sm text-gray-400 mt-4">
                    Need help? 
                    <a href="/contact-support" className="text-secondary underline ml-1">Contact Support</a>
                </p>
            </div>
        </h1>
    </>
  )
}

export default LandingPageComponent;